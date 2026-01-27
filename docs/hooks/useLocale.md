# useLocale

useLocale 是一个用于国际化(i18n)的 Hook，帮助你在应用中轻松实现多语言支持。

## 基础用法

最简单的用法，切换语言并使用翻译。

:::demo 最简单的用法，切换语言并使用翻译。

```vue
<template>
  <div>
    <p>当前语言: {{ locale.locale }}</p>
    <p>欢迎信息: {{ t('welcome') }}</p>
    <p>按钮文本: {{ t('button.submit') }}</p>
    <div style="margin-top: 10px;">
      <tm-button @click="setLocale('zh')" size="small">切换到中文</tm-button>
      <tm-button @click="setLocale('en')" size="small" style="margin-left: 5px;">切换到英文</tm-button>
    </div>
  </div>
</template>

<script>
import { useLocale } from '@teamemory/components';

export default {
  setup() {
    const { locale, t, setLocale } = useLocale('en');
    
    return {
      locale,
      t,
      setLocale
    };
  }
};
</script>
```

:::

## 添加新语言

你可以使用 addLocale 方法添加新的语言包。

:::demo 添加新的语言包。

```vue
<template>
  <div>
    <p>当前语言: {{ locale.locale }}</p>
    <p>自定义消息: {{ t('custom.hello') }}</p>
    <tm-button @click="switchToFrench" size="small">切换到法语</tm-button>
  </div>
</template>

<script>
import { useLocale } from '@teamemory/components';

export default {
  setup() {
    const { locale, t, setLocale, addLocale } = useLocale('en');
    
    // 添加法语语言包
    addLocale('fr', {
      custom: {
        hello: 'Bonjour le monde!'
      }
    });
    
    const switchToFrench = () => {
      setLocale('fr');
    };
    
    return {
      locale,
      t,
      setLocale,
      switchToFrench
    };
  }
};
</script>
```

:::

## API

```js
const { locale, t, setLocale, addLocale } = useLocale(initialLocale)
```

### 参数

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| initialLocale | 初始语言 | string | 'en' |

### 返回值

| 参数 | 说明 | 类型 |
|------|------|------|
| locale | 当前语言 | ComputedRef<string> |
| t | 翻译函数 | Function |
| setLocale | 设置语言函数 | Function |
| addLocale | 添加语言包函数 | Function |

### t(key)

翻译函数，根据提供的键获取对应的翻译文本。

#### 参数

| 参数 | 说明 | 类型 |
|------|------|------|
| key | 翻译键，支持嵌套如 'button.submit' | string |

### setLocale(newLocale)

设置当前语言。

#### 参数

| 参数 | 说明 | 类型 |
|------|------|------|
| newLocale | 新的语言代码 | string |

### addLocale(langCode, langMessages)

添加新的语言包。

#### 参数

| 参数 | 说明 | 类型 |
|------|------|------|
| langCode | 语言代码，如 'en', 'zh', 'fr' | string |
| langMessages | 语言消息对象 | object |