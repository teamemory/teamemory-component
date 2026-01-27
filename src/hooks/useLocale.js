import { ref, computed } from 'vue';

// 默认语言包
const defaultMessages = {
  en: {
    hello: 'Hello',
    welcome: 'Welcome to our application',
    button: {
      submit: 'Submit',
      cancel: 'Cancel'
    }
  },
  zh: {
    hello: '你好',
    welcome: '欢迎使用我们的应用',
    button: {
      submit: '提交',
      cancel: '取消'
    }
  }
};

export default function useLocale(initialLocale = 'en') {
  const locale = ref(initialLocale);
  const messages = ref(defaultMessages);

  const t = (key) => {
    const keys = key.split('.');
    let result = messages.value[locale.value];
    
    for (const k of keys) {
      if (result && typeof result === 'object') {
        result = result[k];
      } else {
        return key; // 如果找不到对应翻译，则返回原key
      }
    }
    
    return result || key;
  };

  const setLocale = (newLocale) => {
    if (messages.value[newLocale]) {
      locale.value = newLocale;
    } else {
      console.warn(`Locale "${newLocale}" is not defined. Using default.`);
    }
  };

  const addLocale = (langCode, langMessages) => {
    messages.value = {
      ...messages.value,
      [langCode]: {
        ...(messages.value[langCode] || {}),
        ...langMessages
      }
    };
  };

  return {
    locale: computed(() => locale.value),
    t,
    setLocale,
    addLocale
  };
}