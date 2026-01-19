#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 获取命令行参数
const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

if (!command || !componentName) {
  console.log('Usage: node cli.js create <ComponentName>');
  process.exit(1);
}

if (command !== 'create') {
  console.log(`Unknown command: ${command}`);
  process.exit(1);
}

// 验证组件名格式
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('Invalid component name. Use PascalCase format, e.g., MyComponent');
  process.exit(1);
}

// 创建组件目录和文件
const componentDir = path.join(__dirname, '../packages/components', componentName.toLowerCase());

if (fs.existsSync(componentDir)) {
  console.error(`Component ${componentName} already exists!`);
  process.exit(1);
}

// 创建组件目录
fs.mkdirSync(componentDir, { recursive: true });

// 创建组件JSX文件
const componentTemplate = `import { defineComponent, computed } from 'vue';
import { css } from '@emotion/css';

export default defineComponent({
  name: 'Tm${componentName}',
  
  props: {
    // 定义组件属性
  },
  
  emits: ['customEvent'], // 自定义事件
  
  setup(props, { slots, emit }) {
    // 组件逻辑
    
    const componentClasses = computed(() => 
      css\`
        /* 组件样式 */
      \`
    );

    return () => (
      <div class={componentClasses.value}>
        {/* 组件JSX内容 */}
        {slots.default?.()}
      </div>
    );
  }
});
`;

const indexTemplate = `import Tm${componentName} from './index';

export { Tm${componentName} };
`;

fs.writeFileSync(path.join(componentDir, 'index.jsx'), componentTemplate);
fs.writeFileSync(path.join(componentDir, 'index.js'), indexTemplate);

// 更新主入口文件
const indexPath = path.join(__dirname, '../packages/index.js');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// 检查是否已经导出该组件
if (!indexContent.includes(`{ default as ${componentName}`)) {
  // 添加导入语句
  const newImport = `export { default as ${componentName} } from './components/${componentName.toLowerCase()}';`;
  indexContent = newImport + '\n' + indexContent;
  
  fs.writeFileSync(indexPath, indexContent);
}

console.log(`✅ Component ${componentName} created successfully!`);
console.log(`📁 Files created in: ${componentDir}/`);
console.log(`📋 Don't forget to add tests and documentation for your component.`);
