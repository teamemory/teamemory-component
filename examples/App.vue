<template>
  <div id="app">
    <h1>Teamemory Components 示例</h1>
    
    <!-- Button 示例 -->
    <div class="demo-section">
      <h2>按钮组件 (TmButton)</h2>
      <tm-button type="primary">主要按钮</tm-button>
      <tm-button type="success">成功按钮</tm-button>
      <tm-button type="warning">警告按钮</tm-button>
      <tm-button type="danger">危险按钮</tm-button>
      <tm-button type="info">信息按钮</tm-button>
    </div>

    <!-- Card 示例 -->
    <div class="demo-section">
      <h2>卡片组件 (TmCard)</h2>
      <tm-card header="卡片标题" style="width: 400px;">
        <p>这是一个使用了 Emotion 样式增强的卡片组件。</p>
        <p>它具有圆角和阴影效果，看起来更现代。</p>
      </tm-card>
    </div>

    <!-- Hook 示例 -->
    <div class="demo-section">
      <h2>useCounter Hook 示例</h2>
      <p>计数器值: {{ count }}</p>
      <p>双倍计数值: {{ doubleCount }}</p>
      <tm-button @click="increment" type="primary">增加</tm-button>
      <tm-button @click="decrement" type="warning">减少</tm-button>
      <tm-button @click="reset" type="info">重置</tm-button>
    </div>

    <div class="demo-section">
      <h2>useLocale Hook 示例</h2>
      <p>{{ t('hello') }} - {{ t('welcome') }}</p>
      <p>{{ t('button.submit') }} - {{ t('button.cancel') }}</p>
      <tm-button @click="switchToZh" type="primary">切换到中文</tm-button>
      <tm-button @click="switchToEn" type="info">Switch to English</tm-button>
    </div>
  </div>
</template>

<script>
import { useCounter, useLocale } from '../src/index.js';

export default {
  name: 'App',
  setup() {
    // 使用 useCounter hook
    const { count, increment, decrement, reset, doubleCount } = useCounter(0);

    // 使用 useLocale hook
    const { t, setLocale } = useLocale();
    const switchToZh = () => setLocale('zh');
    const switchToEn = () => setLocale('en');

    return {
      count,
      increment,
      decrement,
      reset,
      doubleCount,
      t,
      switchToZh,
      switchToEn
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}

.demo-section {
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
}

.demo-section h2 {
  margin-top: 0;
  color: #409eff;
}

.el-button {
  margin: 0 10px 10px 0;
}

p {
  margin: 10px 0;
}
</style>