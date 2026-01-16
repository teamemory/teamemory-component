<template>
  <div id="app">
    <h1>Teamemory Components Library Demo</h1>
    
    <!-- Button Component Example -->
    <section>
      <h2>Button Component</h2>
      <TmButton type="primary">Primary Button</TmButton>
      <TmButton type="success">Success Button</TmButton>
      <TmButton type="warning">Warning Button</TmButton>
      <TmButton type="danger">Danger Button</TmButton>
    </section>
    
    <!-- Card Component Example -->
    <section>
      <h2>Card Component</h2>
      <TmCard header="Card Title" style="width: 300px; margin-top: 20px;">
        <p>This is the card content.</p>
      </TmCard>
    </section>
    
    <!-- Hook Examples -->
    <section>
      <h2>Counter Hook</h2>
      <p>Count: {{ counter.count }}</p>
      <TmButton @click="counter.increment">+</TmButton>
      <TmButton @click="counter.decrement">-</TmButton>
      <TmButton @click="counter.reset">Reset</TmButton>
      <p>Is Even: {{ counter.isEven }}</p>
      <p>Is Odd: {{ counter.isOdd }}</p>
    </section>
    
    <section>
      <h2>Locale Hook</h2>
      <p>{{ locale.t('hello') }}, {{ locale.t('welcome') }}!</p>
      <TmButton @click="locale.setLocale('en-US')">English</TmButton>
      <TmButton @click="locale.setLocale('zh-CN')">中文</TmButton>
      <TmButton @click="locale.setLocale('ja-JP')">日本語</TmButton>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { TmButton, TmCard, useCounter, useLocale } from '@teamemory/components';

const counter = useCounter(0);
const locale = useLocale();

onMounted(() => {
  console.log('Demo app mounted!');
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}

section {
  margin: 30px 0;
}

.tm-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>