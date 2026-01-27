# useLocale

useLocale 是一个用于国际化（i18n）的 Composition API Hook，允许你在应用中轻松切换语言。

## 基础用法

useLocale 提供了语言切换和翻译功能，内置了中英文支持。

::: demo 使用 useLocale 实现国际化
```vue
<template>
  <div>
    <p>{{ t('hello') }}, {{ t('welcome') }}!</p>
    <p>{{ t('button.submit') }} - {{ t('button.cancel') }}</p>
    <div>
      <tm-button @click="switchToZh" type="primary">切换到中文</tm-button>
      <tm-button @click="switchToEn" type="info">Switch to English</tm-button>
    </div>
    <p>当前语言: {{ locale }}</p>
  </div>
</template>

<script>
import { useLocale } from '@teamemory/components';

export default {
  setup() {
    const { locale, t, setLocale } = useLocale();
    
    const switchToZh = () => setLocale('zh');
    const switchToEn = () => setLocale('en');
    
    return {
      locale,
      t,
      switchToZh,
      switchToEn
    };
  }
};
</script>
```
:::

## 自定义语言包

你可以传入自定义的语言包来扩展或覆盖默认的语言选项。

::: demo 使用自定义语言包
```vue
<template>
  <div>
    <p>{{ t('greeting') }}, {{ t('app.title') }}!</p>
    <tm-button @click="toggleLocale" type="primary">{{ t('actions.toggle') }}</tm-button>
    <p>当前语言: {{ locale }}</p>
  </div>
</template>

<script>
import { useLocale } from '@teamemory/components';

export default {
  setup() {
    const customLocales = {
      en: {
        greeting: 'Hello',
        app: {
          title: 'My Application'
        },
        actions: {
          toggle: 'Toggle Language'
        }
      },
      zh: {
        greeting: '你好',
        app: {
          title: '我的应用'
        },
        actions: {
          toggle: '切换语言'
        }
      }
    };
    
    const { locale, t, setLocale } = useLocale(customLocales);
    
    const toggleLocale = () => {
      setLocale(locale.value === 'en' ? 'zh' : 'en');
    };
    
    return {
      locale,
      t,
      toggleLocale
    };
  }
};
</script>
```
:::

## API

### 参数

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| customLocales | 自定义语言包 | Object | {} |

### 返回值

| 属性 | 说明 | 类型 |
|------|------|------|
| locale | 当前语言 | Ref<string> |
| t | 翻译函数 | Function |
| setLocale | 设置语言的方法 | Function |

### 内置语言支持

useLocale 内置了以下语言键值：

- en（英语）
  - hello: 'Hello'
  - welcome: 'Welcome'
  - button: { submit: 'Submit', cancel: 'Cancel' }
- zh（中文）
  - hello: '你好'
  - welcome: '欢迎'
  - button: { submit: '提交', cancel: '取消' }