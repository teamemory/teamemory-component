# Card 卡片

卡片是一种用于展示相关内容的容器，通常包含头部和主体部分。

## 基础用法

最简单的卡片，仅包含内容区域。

::: demo 最基础的卡片用法
```vue
<template>
  <tm-card>
    <div slot="header" class="clearfix">
      <span>卡片标题</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </tm-card>
</template>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
```
:::

## 带标题的卡片

带有标题的卡片，可用于展示更复杂的内容。

::: demo 包含标题的卡片
```vue
<template>
  <tm-card header="卡片标题">
    <p>这是一段更长的描述文本，用于展示卡片组件的用途和功能。</p>
    <p>卡片组件非常适合用来展示相关内容，比如产品信息、用户资料等。</p>
  </tm-card>
</template>

<style>
p {
  margin: 10px 0;
}
</style>
```
:::

## 带图片的卡片

结合图片展示的卡片。

::: demo 包含图片的卡片
```vue
<template>
  <tm-card header="风景图片" style="max-width: 400px;">
    <img src="https://element-plus.org/images/element-plus-logo.svg" class="image" />
    <div style="padding: 14px;">
      <span>美丽的风景</span>
      <div class="bottom">
        <time class="time">{{ currentDate }}</time>
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </div>
  </tm-card>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toISOString().slice(0, 10)
    };
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
</style>
```
:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| header | 设置卡片的标题 | string | — | — |
| body-style | 设置 body 的样式 | object | — | { padding: '20px' } |
| shadow | 设置阴影显示时机 | string | always / hover / never | always |

## Slots

| 插槽名 | 说明 |
|------|------|
| header | 卡片标题 |
| default | 卡片内容 |