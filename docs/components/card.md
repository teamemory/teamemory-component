# Card 卡片

基础卡片组件，包含标题和内容区域，支持阴影效果。

## 基础用法

使用 `header` 属性设置卡片标题，内容通过默认插槽传入。

:::demo 基础卡片

```jsx
<template>
  <tm-card header="卡片标题">
    <p>这是一段卡片内容，可以放置任意的文本、图片或其他组件。</p>
  </tm-card>
</template>
```

:::

## 阴影控制

使用 `shadow` 属性控制阴影的显示时机。

:::demo 阴影效果

```jsx
<template>
  <div class="demo-card">
    <tm-card header="始终显示阴影" shadow="always">
      <p>阴影始终显示</p>
    </tm-card>

    <tm-card header="悬停显示阴影" shadow="hover">
      <p>鼠标悬停时显示阴影</p>
    </tm-card>

    <tm-card header="无阴影" shadow="never">
      <p>不显示阴影</p>
    </tm-card>
  </div>
</template>

<style>
.demo-card .tm-card {
  margin-bottom: 20px;
  max-width: 400px;
}
</style>
```

:::

## 无标题卡片

不传入 `header` 属性时，卡片将只显示内容区域。

:::demo 无标题卡片

```jsx
<template>
  <tm-card style="max-width: 400px;">
    <p>这是一个没有标题的卡片。</p>
    <p>可以用于展示一些简单的信息或内容。</p>
  </tm-card>
</template>
```

:::

## 复杂内容

卡片内容可以包含任何元素。

:::demo 复杂内容

```jsx
<template>
  <tm-card header="用户信息" shadow="always" style="max-width: 500px;">
    <div class="user-info">
      <img src="https://picsum.photos/80/80" alt="avatar" style="border-radius: 50%;" />
      <div>
        <h3>张三</h3>
        <p>前端开发工程师</p>
        <p>邮箱：zhangsan@example.com</p>
      </div>
    </div>
  </tm-card>
</template>

<style>
.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}
.user-info img {
  width: 80px;
  height: 80px;
}
.user-info h3 {
  margin: 0 0 8px 0;
}
.user-info p {
  margin: 4px 0;
  color: #606266;
}
</style>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| header | 卡片标题 | string | - | '' |
| shadow | 阴影显示时机 | string | always / hover / never | always |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 卡片内容 |

### Events

暂无

## 完整示例

```jsx
import { TmCard } from '@teamemory/components';

export default {
  components: {
    TmCard
  },
  setup() {
    return () => (
      <div>
        <tm-card header="我的卡片" shadow="hover">
          <p>这是卡片的内容区域</p>
          <p>可以放置任何内容</p>
        </tm-card>
      </div>
    );
  }
};
```

## 设计规范

- 卡片圆角：4px
- 边框颜色：#ebeef5
- 背景颜色：#ffffff
- 阴影颜色：rgba(0, 0, 0, 0.1)
- 标题字体：600，16px，#303133
- 内容字体：常规，14px，#606266
- 内边距：20px
- 标题内边距：18px 20px
