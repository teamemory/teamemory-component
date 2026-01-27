// 导出所有组件
export { default as TmButton } from './components/button';
export { default as TmCard } from './components/card';

// 导出所有 hooks
export { default as useCounter } from './hooks/useCounter';
export { default as useLocale } from './hooks/useLocale';

// 组件库安装函数
const TeamemoryComponents = {
  install(Vue) {
    Vue.component('TmButton', TmButton);
    Vue.component('TmCard', TmCard);
  }
};

export default TeamemoryComponents;