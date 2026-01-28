// 导入组件
import { TmButton } from "./components/button/index";
import { TmCard } from "./components/card/index";

// 导入Hook
import { useCounter } from "./hooks/useCounter";

// 组件列表
const components = [TmButton, TmCard];

// 安装函数
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// 导出组件
export { install, TmButton, TmCard };

// 导出Hooks
export { useCounter };

// 默认导出
export default {
  install,
};
