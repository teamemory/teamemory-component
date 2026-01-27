import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import TeamemoryComponents from '../src/index.js';

const app = createApp(App);
app.use(ElementPlus);
app.use(TeamemoryComponents);
app.mount('#app');