# useCounter 计数器 Hook

提供计数器功能的 Hook，包含增加、减少、重置等操作。

## 基础用法

:::demo 基础计数器

```jsx
<template>
  <div class="demo-counter">
    <h3>计数器示例</h3>
    <div class="counter-display">
      <span>当前计数: {{ count }}</span>
      <span>双倍计数: {{ double }}</span>
    </div>
    <div class="counter-actions">
      <button @click="decrement">-1</button>
      <button @click="increment">+1</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from '@teamemory/components';

const { count, increment, decrement, reset, double } = useCounter(0);
</script>

<style>
.demo-counter {
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  max-width: 300px;
}
.counter-display {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.counter-display span {
  font-size: 16px;
}
.counter-actions {
  display: flex;
  gap: 10px;
}
.counter-actions button {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}
.counter-actions button:hover {
  color: #409eff;
  border-color: #409eff;
  background-color: #ecf5ff;
}
</style>
```

:::

## 自定义初始值

`useCounter` 接受一个参数作为初始值。

:::demo 自定义初始值

```jsx
<template>
  <div class="demo-counter">
    <h3>从 10 开始的计数器</h3>
    <div class="counter-display">
      <span>当前计数: {{ count }}</span>
    </div>
    <div class="counter-actions">
      <button @click="decrement">-1</button>
      <button @click="increment">+1</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from '@teamemory/components';

const { count, increment, decrement, reset } = useCounter(10);
</script>

<style>
.demo-counter {
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  max-width: 300px;
}
.counter-display {
  margin: 20px 0;
}
.counter-actions {
  display: flex;
  gap: 10px;
}
.counter-actions button {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

:::

## JSX 中使用

在 JSX 中使用 `useCounter`：

```jsx
import { useCounter } from '@teamemory/components';

export default {
  setup() {
    const { count, increment, decrement, reset, double } = useCounter(0);

    return () => (
      <div style="padding: 20px;">
        <h3>JSX 计数器</h3>
        <p>当前计数: {count.value}</p>
        <p>双倍计数: {double.value}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>重置</button>
      </div>
    );
  }
};
```

## API

### 参数

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| initialValue | 初始值 | number | 0 |

### 返回值

| 属性/方法 | 说明 | 类型 |
|-----------|------|------|
| count | 当前计数值 | Ref\<number\> |
| increment | 增加计数（+1） | () => void |
| decrement | 减少计数（-1） | () => void |
| reset | 重置为初始值 | () => void |
| double | 计数的双倍值（计算属性） | ComputedRef\<number\> |

## 使用场景

- 计数器
- 数量选择器
- 购物车商品数量
- 步进器
- 任何需要计数功能的场景

## TypeScript 示例

```ts
import { useCounter } from '@teamemory/components';

// 类型自动推断
const { count, increment } = useCounter(0);

// count 的类型为 Ref<number>
// increment 的类型为 () => void

console.log(count.value); // number 类型
increment(); // 自动补全和类型检查
```

## 实现原理

`useCounter` 基于 Vue 的 `ref` 和 `computed` 实现：

```ts
import { ref, computed } from 'vue';

export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = initialValue;
  };

  const double = computed(() => count.value * 2);

  return {
    count,
    increment,
    decrement,
    reset,
    double
  };
};
```

## 注意事项

1. `count` 是一个 `ref`，在模板中使用时会自动解包，但在 JS 中需要通过 `.value` 访问
2. `double` 是计算属性，会自动追踪 `count` 的变化
3. `reset` 方法会将计数重置为传入的初始值
4. 这个 Hook 可以在任何组件中使用，也可以组合到其他 Hook 中
