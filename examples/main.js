import { createApp } from 'vue';
import App from './App.jsx';
import TeamemoryComponents from '@/index';

const app = createApp(App);
app.use(TeamemoryComponents);
app.mount('#app');