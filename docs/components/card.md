# TmCard 卡片

卡片用于包裹内容区域，常用于展示列表项、表单等。

## 基础用法

最简单的用法，包含标题和内容。

:::demo 通过 `header` 属性设置卡片标题，也可以使用 `header` 插槽设置更复杂的标题。

```vue
<template>
  <tm-card header="卡片标题" style="width: 480px;">
    这是一个简单的卡片示例，展示了卡片组件的基本用法。
  </tm-card>
</template>
```

:::

## 带自定义标题的卡片

可以通过 `header` 插槽放置更复杂的内容。

:::demo 通过 `header` 插槽可以放置任意元素，如按钮、输入框等。

```vue
<template>
  <tm-card style="width: 480px;">
    <template #header>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span>自定义标题</span>
        <tm-button type="primary" size="small">操作按钮</tm-button>
      </div>
    </template>
    这是一个带有自定义标题的卡片示例。
  </tm-card>
</template>
```

:::

## 阴影效果

通过 `shadow` 属性控制卡片阴影的显示时机。

:::demo 通过 `shadow` 属性设置阴影显示时机，可选值为 `always`、`hover` 或 `never`。

```vue
<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;">
    <tm-card shadow="always" style="width: 240px;">
      总是显示阴影
    </tm-card>
    <tm-card shadow="hover" style="width: 240px;">
      悬停时显示阴影
    </tm-card>
    <tm-card shadow="never" style="width: 240px;">
      永远不显示阴影
    </tm-card>
  </div>
</template>
```

:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| header | 设置卡片标题 | string | — | — |
| shadow | 卡片阴影显示时机 | string | always/hover/never | always |
| body-style | 设置 body 的样式 | object | — | {} |

## Slots

| 插槽名 | 说明 |
|------|------|
| — | 卡片内容 |
| header | 卡片标题 |