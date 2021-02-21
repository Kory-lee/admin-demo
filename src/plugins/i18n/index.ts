import { App } from 'vue';
import { createI18n, I18n, I18nOptions } from 'vue-i18n';
import { setupLocale } from '/@/hooks/web/useLocale';
import messages from '/@/locales/getMessage';
import projectSetting from '/@/settings/projectSetting';
const { lang, fallback, availableLocales } = projectSetting?.locale;

const localData: I18nOptions = {
  legacy: false,
  locale: lang,
  messages,
  sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackLocale: fallback,
  availableLocales,
};

const i18n = createI18n(localData) as I18n;

const { install } = i18n;
i18n.install = (app: App<Element>, ...args: unknown[]) => {
  setupLocale();
  install(app, ...args);
};

export const t = (key: string) => key;

export default i18n;
