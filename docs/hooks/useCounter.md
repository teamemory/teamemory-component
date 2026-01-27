# useCounter

useCounter 是一个用于管理计数器状态的 Hook。

## 基础用法

最简单的用法，创建一个计数器。

:::demo 最简单的用法，创建一个计数器。

```vue
<template>
  <div>
    <p>计数器值: {{ count }}</p>
    <p>双倍值: {{ double }}</p>
    <div style="margin-top: 10px;">
      <tm-button @click="increment" type="primary" size="small">增加</tm-button>
      <tm-button @click="decrement" type="warning" size="small" style="margin: 0 5px;">减少</tm-button>
      <tm-button @click="reset" type="danger" size="small">重置</tm-button>
    </div>
  </div>
</template>

<script>
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const { count, increment, decrement, reset, double } = useCounter(0);
    
    return {
      count,
      increment,
      decrement,
      reset,
      double
    };
  }
};
</script>
```

:::

## API

```js
const { count, increment, decrement, reset, double } = useCounter(initialValue)
```

### 参数

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| initialValue | 初始值 | number | 0 |

### 返回值

| 参数 | 说明 | 类型 |
|------|------|------|
| count | 当前计数值 | Ref<number> |
| increment | 增加计数值 | Function |
| decrement | 减少计数值 | Function |
| reset | 重置计数值 | Function |
| double | 计数值的两倍 | ComputedRef<number> |