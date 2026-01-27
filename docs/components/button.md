# TmButton 按钮

按钮用于触发一个操作，如提交表单、打开弹窗等。

## 基础用法

使用 `type`、`size`、`loading`、`disabled` 属性来定义按钮的样式。

:::demo 使用 `type`、`size`、`loading`、`disabled` 属性来定义按钮的样式。

```vue
<template>
  <div style="margin-bottom: 20px;">
    <tm-button>默认按钮</tm-button>
    <tm-button type="primary">主要按钮</tm-button>
    <tm-button type="success">成功按钮</tm-button>
    <tm-button type="warning">警告按钮</tm-button>
    <tm-button type="danger">危险按钮</tm-button>
  </div>
  <div style="margin-bottom: 20px;">
    <tm-button size="mini">迷你按钮</tm-button>
    <tm-button size="small">小型按钮</tm-button>
    <tm-button size="medium">中等按钮</tm-button>
    <tm-button size="large">大型按钮</tm-button>
  </div>
  <div style="margin-bottom: 20px;">
    <tm-button disabled>禁用按钮</tm-button>
    <tm-button loading>加载中</tm-button>
  </div>
</template>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | string | default/primary/success/warning/danger | default |
| size | 按钮尺寸 | string | mini/small/medium/large | medium |
| disabled | 是否禁用 | boolean | — | false |
| loading | 是否显示加载状态 | boolean | — | false |

## Events

| 事件名称 | 说明 | 回调参数 |
|----------|------|----------|
| click | 点击按钮时触发 | event |