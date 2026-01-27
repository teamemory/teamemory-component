import { ref, computed } from 'vue';

const defaultLocale = {
  en: {
    hello: 'Hello',
    welcome: 'Welcome',
    button: {
      submit: 'Submit',
      cancel: 'Cancel'
    }
  },
  zh: {
    hello: '你好',
    welcome: '欢迎',
    button: {
      submit: '提交',
      cancel: '取消'
    }
  }
};

export default function useLocale(customLocales = {}) {
  const locale = ref('en');
  const locales = { ...defaultLocale, ...customLocales };
  
  const t = computed(() => (key) => {
    const keys = key.split('.');
    let result = locales[locale.value];
    
    for (let i = 0; i < keys.length; i++) {
      if (result && typeof result === 'object') {
        result = result[keys[i]];
      } else {
        break;
      }
    }
    
    return result || key;
  });
  
  const setLocale = (lang) => {
    if (locales[lang]) {
      locale.value = lang;
    }
  };
  
  return {
    locale: locale,
    t: t.value,
    setLocale
  };
}