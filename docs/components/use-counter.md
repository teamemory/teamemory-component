# useCounter

useCounter 是一个用于管理计数器状态的 Composition API Hook。

## 基础用法

useCounter 提供了一个简单的计数器功能，包括增加、减少、重置和计算属性。

::: demo 使用 useCounter 管理计数器状态
```vue
<template>
  <div>
    <p>计数器值: {{ count }}</p>
    <p>双倍计数值: {{ doubleCount }}</p>
    <div>
      <tm-button @click="increment" type="primary">增加</tm-button>
      <tm-button @click="decrement" type="warning">减少</tm-button>
      <tm-button @click="reset" type="info">重置</tm-button>
    </div>
  </div>
</template>

<script>
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const { count, increment, decrement, reset, doubleCount } = useCounter(0);
    
    return {
      count,
      increment,
      decrement,
      reset,
      doubleCount
    };
  }
};
</script>
```
:::

## 带初始值的计数器

可以传入初始值来设置计数器的起始值。

::: demo 设置计数器初始值
```vue
<template>
  <div>
    <p>当前值: {{ count }}</p>
    <p>初始值: {{ initialValue }}</p>
    <tm-button @click="increment">增加</tm-button>
    <tm-button @click="reset">重置为 {{ initialValue }}</tm-button>
  </div>
</template>

<script>
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const initialValue = 10;
    const { count, increment, reset } = useCounter(initialValue);
    
    return {
      count,
      increment,
      reset,
      initialValue
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
| initialValue | 计数器的初始值 | number | 0 |

### 返回值

| 属性 | 说明 | 类型 |
|------|------|------|
| count | 当前计数值 | Ref<number> |
| increment | 增加计数的方法 | Function |
| decrement | 减少计数的方法 | Function |
| reset | 重置计数的方法 | Function |
| doubleCount | 计数值的两倍（计算属性） | ComputedRef |