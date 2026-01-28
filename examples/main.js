import { createApp } from 'vue';
import App from './App.vue';
import TeamemoryComponents from '../packages/index';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');