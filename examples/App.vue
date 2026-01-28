<template>
  <div id="app">
    <h1>Teamemory Components Demo</h1>
    
    <h2>Buttons</h2>
    <tm-button type="default">Default Button</tm-button>
    <tm-button type="primary">Primary Button</tm-button>
    <tm-button type="success">Success Button</tm-button>
    <tm-button type="warning">Warning Button</tm-button>
    <tm-button type="danger">Danger Button</tm-button>
    <br><br>
    <tm-button size="small">Small Button</tm-button>
    <tm-button size="medium">Medium Button</tm-button>
    <tm-button size="large">Large Button</tm-button>
    <br><br>
    <tm-button type="primary" disabled>Disabled Button</tm-button>
    
    <h2>Cards</h2>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <tm-card header="Simple Card" style="width: 300px;">
        <p>This is a simple card component built with Vue3, JSX and Emotion CSS.</p>
      </tm-card>
      
      <tm-card header="Card with Shadow on Hover" shadow="hover" style="width: 300px;">
        <p>This card only shows shadow on hover.</p>
      </tm-card>
      
      <tm-card shadow="never" style="width: 300px;">
        <div slot="header">Card Without Shadow</div>
        <p>This card has no shadow at all.</p>
      </tm-card>
    </div>
    
    <h2>Hook Example - Counter</h2>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double: {{ double }}</p>
      <tm-button @click="increment">+</tm-button>
      <tm-button @click="decrement">-</tm-button>
      <tm-button @click="reset">Reset</tm-button>
    </div>
  </div>
</template>

<script>
import { useCounter } from '../packages/index';

export default {
  name: 'App',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>