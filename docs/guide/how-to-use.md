# 如何使用

本文档将详细介绍如何在项目中使用 Teamemory Components。

## 项目配置

### 安装依赖

Teamemory Components 依赖于 Vue 3 和 Element Plus，确保您的项目中已安装这些依赖：

```bash
npm install vue@^3.3.4 element-plus@^2.3.6 @emotion/css@^11.11.0
```

然后安装 Teamemory Components：

```bash
npm install @teamemory/components
```

### 构建工具配置

#### Vite 配置

如果您的项目使用 Vite 构建，请确保配置了正确的插件：

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx() // 支持 JSX
  ]
});
```

### TypeScript 支持

虽然我们不使用 TSX 写法，但如果您在 TypeScript 项目中使用 Teamemory Components，可以创建类型声明文件：

```typescript
// shims-vue.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

## 组件定制

### 使用 Emotion 定制样式

Teamemory Components 使用 Emotion 进行样式管理，您可以使用 Emotion 提供的 CSS 函数来定制组件样式：

```vue
<template>
  <tm-button :class="customButtonClass">自定义按钮</tm-button>
</template>

<script>
import { css } from '@emotion/css';

export default {
  setup() {
    const customButtonClass = css`
      background: linear-gradient(45deg, #fe6b8b, #ff8e53);
      border-radius: 3px;
      font-size: 16px;
      padding: 12px 24px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      
      &:hover {
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      }
    `;
    
    return {
      customButtonClass
    };
  }
};
</script>
```

### 使用 Element Plus 主题

由于 Teamemory Components 基于 Element Plus，您可以使用 Element Plus 的主题定制功能：

1. 通过 SCSS 变量定制主题
2. 使用 Element Plus 的在线主题编辑器
3. 使用暗色主题等预设主题

## 国际化

Teamemory Components 提供了 useLocale Hook 用于国际化：

```javascript
import { useLocale } from '@teamemory/components';

export default {
  setup() {
    const { t, setLocale } = useLocale();
    
    // 切换语言
    const changeToChinese = () => setLocale('zh');
    const changeToEnglish = () => setLocale('en');
    
    return {
      t,
      changeToChinese,
      changeToEnglish
    };
  }
};
```

## 性能优化

### 按需加载

为了减小打包体积，建议使用按需加载：

```javascript
// 只导入需要的组件
import { TmButton } from '@teamemory/components';

export default {
  components: {
    TmButton
  }
};
```

### 使用异步组件

对于大型应用，可以使用异步组件来延迟加载：

```javascript
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    AsyncTmCard: defineAsyncComponent(() => import('@teamemory/components').then(c => c.TmCard))
  }
};
```

## 开发注意事项

1. **样式隔离**: Emotion 提供了良好的样式隔离，但要注意不要过度嵌套样式规则
2. **响应式**: 组件应该在不同屏幕尺寸下正常显示
3. **无障碍访问**: 使用语义化 HTML 标签和适当的 ARIA 属性
4. **浏览器兼容性**: 支持现代浏览器，IE 不支持

## 调试技巧

1. 使用 Vue DevTools 检查组件树和状态
2. 使用浏览器开发者工具检查元素样式
3. 使用控制台查看可能的警告或错误信息
4. 在开发环境中开启 Vue 的调试模式

通过遵循这些最佳实践，您可以更好地使用 Teamemory Components 构建高质量的应用程序。