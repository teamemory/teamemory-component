# Button 按钮

基础按钮组件，支持多种类型和尺寸。

## 基础用法

使用 `type` 属性来定义按钮的样式。

:::demo 按钮类型

```jsx
<template>
  <div class="demo-button">
    <tm-button type="default">默认按钮</tm-button>
    <tm-button type="primary">主要按钮</tm-button>
    <tm-button type="success">成功按钮</tm-button>
    <tm-button type="warning">警告按钮</tm-button>
    <tm-button type="danger">危险按钮</tm-button>
  </div>
</template>

<style>
.demo-button .tm-button {
  margin-right: 10px;
}
</style>
```

:::

## 不同尺寸

使用 `size` 属性来定义按钮的尺寸。

:::demo 按钮尺寸

```jsx
<template>
  <div class="demo-button">
    <tm-button size="small">小号按钮</tm-button>
    <tm-button size="medium">中号按钮</tm-button>
    <tm-button size="large">大号按钮</tm-button>
  </div>
</template>

<style>
.demo-button .tm-button {
  margin-right: 10px;
}
</style>
```

:::

## 禁用状态

使用 `disabled` 属性来禁用按钮。

:::demo 禁用状态

```jsx
<template>
  <div class="demo-button">
    <tm-button type="primary" disabled>禁用的主要按钮</tm-button>
    <tm-button type="success" disabled>禁用的成功按钮</tm-button>
  </div>
</template>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | string | default / primary / success / warning / danger | default |
| size | 按钮尺寸 | string | small / medium / large | medium |
| disabled | 是否禁用 | boolean | - | false |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |

### Events

暂无

## 完整示例

```jsx
import { TmButton } from '@teamemory/components';

export default {
  components: {
    TmButton
  },
  setup() {
    const handleClick = () => {
      console.log('按钮被点击');
    };

    return () => (
      <div>
        <tm-button type="primary" onClick={handleClick}>
          点击我
        </tm-button>
      </div>
    );
  }
};
```

## 设计规范

- 按钮高度：small(28px) / medium(32px) / large(40px)
- 按钮圆角：4px
- 主要颜色：#409eff（蓝色）
- 成功颜色：#67c23a（绿色）
- 警告颜色：#e6a23c（橙色）
- 危险颜色：#f56c6c（红色）
