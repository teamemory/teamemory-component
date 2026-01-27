<template>
  <div id="app">
    <h1>Teamemory Components 示例</h1>
    
    <div style="margin: 20px 0;">
      <h2>按钮组件 (TmButton)</h2>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <tm-button>默认按钮</tm-button>
        <tm-button type="primary">主要按钮</tm-button>
        <tm-button type="success">成功按钮</tm-button>
        <tm-button type="warning">警告按钮</tm-button>
        <tm-button type="danger">危险按钮</tm-button>
      </div>
      <div style="margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap;">
        <tm-button size="mini">迷你按钮</tm-button>
        <tm-button size="small">小型按钮</tm-button>
        <tm-button size="medium">中等按钮</tm-button>
        <tm-button size="large">大型按钮</tm-button>
      </div>
      <div style="margin-top: 10px; display: flex; gap: 10px;">
        <tm-button disabled>禁用按钮</tm-button>
        <tm-button loading>加载中</tm-button>
      </div>
    </div>

    <div style="margin: 20px 0;">
      <h2>卡片组件 (TmCard)</h2>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <tm-card 
          header="卡片标题" 
          style="width: 300px; margin-right: 20px;"
        >
          这是一个简单的卡片示例，展示了卡片组件的基本用法。
        </tm-card>
        
        <tm-card 
          shadow="hover"
          style="width: 300px;"
        >
          <template #header>
            <strong>自定义标题</strong>
          </template>
          这是一个带有自定义标题的卡片，仅在悬停时显示阴影效果。
        </tm-card>
      </div>
    </div>

    <div style="margin: 20px 0;">
      <h2>Hook 示例 (useCounter)</h2>
      <div style="padding: 20px; border: 1px solid #ebeef5; border-radius: 4px; max-width: 400px;">
        <p>计数器值: {{ counter.count }}</p>
        <p>双倍值: {{ counter.double }}</p>
        <div style="margin-top: 10px;">
          <tm-button @click="counter.increment" type="primary" size="small">增加</tm-button>
          <tm-button @click="counter.decrement" type="warning" size="small" style="margin: 0 5px;">减少</tm-button>
          <tm-button @click="counter.reset" type="danger" size="small">重置</tm-button>
        </div>
      </div>
    </div>

    <div style="margin: 20px 0;">
      <h2>Hook 示例 (useLocale)</h2>
      <div style="padding: 20px; border: 1px solid #ebeef5; border-radius: 4px; max-width: 400px;">
        <p>当前语言: {{ locale.locale }}</p>
        <p>欢迎信息: {{ locale.t('welcome') }}</p>
        <p>按钮文本: {{ locale.t('button.submit') }}</p>
        <div style="margin-top: 10px;">
          <tm-button @click="changeLocale('zh')" size="small">切换到中文</tm-button>
          <tm-button @click="changeLocale('en')" size="small" style="margin-left: 5px;">切换到英文</tm-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { TmButton, TmCard, useCounter, useLocale } from '../src';

export default defineComponent({
  name: 'App',
  components: {
    TmButton,
    TmCard
  },
  setup() {
    const counter = useCounter(0);
    const locale = useLocale('en');
    
    const changeLocale = (lang) => {
      locale.setLocale(lang);
    };
    
    return {
      counter,
      locale,
      changeLocale
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>