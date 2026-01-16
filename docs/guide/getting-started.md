# 快速开始

## 安装

使用 npm:

```bash
npm install @teamemory/components
```

使用 yarn:

```bash
yarn add @teamemory/components
```

## 基础使用

### 完整引入

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import TeamemoryComponents from '@teamemory/components'
import '@teamemory/components/dist/style.css'

const app = createApp(App)

app.use(TeamemoryComponents)
app.mount('#app')
```

### 按需引入

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { TmButton, TmCard } from '@teamemory/components'
import '@teamemory/components/dist/style.css'

const app = createApp(App)

app.component('TmButton', TmButton)
app.component('TmCard', TmCard)
app.mount('#app')
```

### 在组件中使用

```vue
<template>
  <div>
    <TmButton type="primary" @click="handleClick">点击我</TmButton>
    <TmCard header="卡片标题">
      <p>这是卡片内容</p>
    </TmCard>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

## 使用 Hooks

```vue
<template>
  <div>
    <p>计数器: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@teamemory/components'

const { count, increment, decrement } = useCounter(0)
</script>
```

## 样式定制

组件库使用 @emotion/css 进行样式管理，你可以通过 CSS 变量来自定义主题。

```css
:root {
  --tm-color-primary: #409eff;
  --tm-border-radius: 4px;
}
```
