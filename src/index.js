import TmButton from './components/button';
import TmCard from './components/card';
import { ElButton } from 'element-plus';

// 导出组件
export { TmButton, TmCard, ElButton as Button };

// 导出hooks
export { default as useCounter } from './hooks/useCounter';
export { default as useLocale } from './hooks/useLocale';

// 组件库集合
const TeamemoryComponents = {
  install(app) {
    app.component('TmButton', TmButton);
    app.component('TmCard', TmCard);
  },
};

// 全局注册组件库
export default TeamemoryComponents;
