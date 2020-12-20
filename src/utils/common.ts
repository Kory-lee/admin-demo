import { isObject } from './is';

export function omit(obj: any, attr: string) {
  const { [attr]: _, ...newObj } = obj;
  return newObj;
}

export const noop = () => {};

export function deepMerge<T = any>(src: any, target: any): T {
  let key: string;
  for (key in target)
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  return src;
}
