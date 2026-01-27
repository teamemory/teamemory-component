# Button 按钮

按钮用于触发操作，是最常见的交互元素之一。

## 基础用法

按钮有多种类型，包括主要按钮、成功按钮、警告按钮、危险按钮和信息按钮。

::: demo 基础按钮用法
```vue
<template>
  <tm-button>默认按钮</tm-button>
  <tm-button type="primary">主要按钮</tm-button>
  <tm-button type="success">成功按钮</tm-button>
  <tm-button type="warning">警告按钮</tm-button>
  <tm-button type="danger">危险按钮</tm-button>
  <tm-button type="info">信息按钮</tm-button>
</template>
```
:::

## 不同尺寸

按钮有三种尺寸：大、中（默认）、小。

::: demo 通过 size 属性配置不同尺寸的按钮
```vue
<template>
  <tm-button size="large">大型按钮</tm-button>
  <tm-button>默认按钮</tm-button>
  <tm-button size="small">小型按钮</tm-button>
</template>
```
:::

## 禁用状态

通过 [disabled](#attributes) 属性来禁用按钮，不可点击。

::: demo
```vue
<template>
  <tm-button disabled>禁用按钮</tm-button>
  <tm-button type="primary" disabled>主要按钮</tm-button>
</template>
```
:::

## 加载状态

通过 [loading](#attributes) 属性设置按钮为加载状态，此时按钮不可点击。

::: demo
```vue
<template>
  <tm-button loading>加载中</tm-button>
  <tm-button type="primary" :loading="isLoading" @click="handleLoading">
    点击加载
  </tm-button>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    handleLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }
};
</script>
```
:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | string | primary / success / warning / danger / info / text | — |
| size | 按钮尺寸 | string | large / default / small | default |
| loading | 是否加载中 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |

## Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击按钮时触发 | event |