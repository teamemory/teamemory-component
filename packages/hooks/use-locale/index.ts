import { ref, computed } from 'vue';

export interface LocaleConfig {
  [key: string]: any;
}

export interface UseLocaleReturn {
  currentLocale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
  locales: string[];
}

export const useLocale = (defaultLocale: string = 'zh-CN'): UseLocaleReturn => {
  const currentLocale = ref(defaultLocale);
  
  const locales = ref(['zh-CN', 'en-US', 'ja-JP']);
  
  const translations = {
    'zh-CN': {
      hello: '你好',
      welcome: '欢迎使用组件库',
      confirm: '确认',
      cancel: '取消'
    },
    'en-US': {
      hello: 'Hello',
      welcome: 'Welcome to our component library',
      confirm: 'Confirm',
      cancel: 'Cancel'
    },
    'ja-JP': {
      hello: 'こんにちは',
      welcome: 'コンポーネントライブラリへようこそ',
      confirm: '確認',
      cancel: 'キャンセル'
    }
  };

  const setLocale = (locale: string) => {
    if (locales.value.includes(locale)) {
      currentLocale.value = locale;
    }
  };

  const t = (key: string) => {
    const localeTranslations = translations[currentLocale.value as keyof typeof translations];
    return localeTranslations?.[key] || key;
  };

  return {
    currentLocale: currentLocale.value,
    setLocale,
    t,
    locales: locales.value
  };
};