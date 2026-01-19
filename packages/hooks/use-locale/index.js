import { ref, computed } from 'vue';

export const useLocale = (defaultLocale = 'zh-CN') => {
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

  const setLocale = (locale) => {
    if (locales.value.includes(locale)) {
      currentLocale.value = locale;
    }
  };

  const t = (key) => {
    const localeTranslations = translations[currentLocale.value];
    return localeTranslations?.[key] || key;
  };

  return {
    currentLocale: currentLocale.value,
    setLocale,
    t,
    locales: locales.value
  };
};