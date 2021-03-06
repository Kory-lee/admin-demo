export interface Cache<V = any> {
  value?: V;
  timeoutId?: ReturnType<typeof setTimeout>;
  time?: number;
  alive?: number;
}

const NOT_ALIVE = 0;

export default class Memory<T = any, V = any> {
  private cache: { [key in keyof T]?: Cache<V> } = {};
  readonly alive: number;

  constructor(alive = NOT_ALIVE) {
    this.alive = alive * 1000;
  }
  get getCache() {
    return this.cache;
  }
  setCache(cache) {
    this.cache = cache;
  }
  get<K extends keyof T>(key: K) {
    return this.cache[key];
  }
  set<K extends keyof T>(key: K, value: V, expires?: number) {
    let item = this.get(key);
    if (!expires || (expires as number) <= 0) {
      expires = this.alive;
    }
    if (item) {
      if (item.timeoutId) {
        clearTimeout(item.timeoutId);
        item.timeoutId = undefined;
      }
      item.value = value;
    } else {
      item = { value, alive: expires };
      this.cache[key] = item;
    }

    if (!expires) return value;

    const now = Date.now();
    item.time = now + this.alive;
    item.timeoutId = setTimeout(
      () => {
        this.remove(key);
      },
      expires > now ? expires - now : expires
    );
    return value;
  }
  remove<K extends keyof T>(key: K) {
    const item = this.get(key);
    Reflect.deleteProperty(this.cache, key);
    if (item) {
      item.timeoutId && clearTimeout(item.timeoutId);
      return item.value;
    }
  }
  clear() {
    Object.keys(this.cache).forEach((key) => {
      const item = this.cache[key];
      if (item?.timeoutId) {
        clearTimeout(item.timeoutId);
        item.timeoutId = undefined;
      }
    });
    this.cache = {};
  }
  restCache(cache: { [K in keyof T]: Cache }) {
    Object.keys(cache).forEach((key) => {
      const item = cache[key];
      if (item && item.time) {
        const now = new Date().getTime(),
          expire = item.time;

        if (expire > now) {
          this.set(<keyof T>key, item.value, expire);
        }
      }
    });
  }
}
