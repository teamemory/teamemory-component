#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

const args = process.argv.slice(2);

async function createComponent(name) {
  const componentDir = path.join(__dirname, '../src/components', name.toLowerCase());

  if (fs.existsSync(componentDir)) {
    console.error(chalk.red(`组件 ${name} 已存在！`));
    return;
  }

  fs.mkdirSync(componentDir, { recursive: true });

  // 创建组件文件
  const componentTemplate = `import { css } from '@emotion/css';
import { defineComponent, computed } from 'vue';

const Tm${name} = defineComponent({
  name: 'Tm${name}',
  props: {
    // 在这里添加组件属性
  },
  setup(props, { slots, emit }) {
    // 在这里添加组件逻辑
    
    return () => (
      <div>
        {/* 在这里添加组件JSX */}
        <p>Tm${name} Component</p>
        {slots.default?.()}
      </div>
    );
  }
});

export default Tm${name};
`;

  const indexPath = path.join(componentDir, 'index.jsx');
  fs.writeFileSync(indexPath, componentTemplate);

  // 更新组件库入口文件
  const indexFilePath = path.join(__dirname, '../src/index.js');
  let indexContent = fs.readFileSync(indexFilePath, 'utf-8');
  
  // 添加导入语句
  const importStatement = `export { default as Tm${name} } from './components/${name.toLowerCase()}';`;
  if (!indexContent.includes(importStatement)) {
    indexContent = indexContent.replace(
      /(\/\/\s*导出所有组件)/,
      `$1\n${importStatement}`
    );
  }
  
  // 添加到install函数
  const installPattern = /install\(Vue\) \{\s*\n(\s*.*)*/;
  const installMatch = indexContent.match(installPattern);
  
  if (installMatch) {
    const installBlock = installMatch[0];
    const newInstallBlock = installBlock.replace(
      /(\s*)(\})/,
      `$1$1Vue.component('Tm${name}', Tm${name});\n$1$2`
    );
    indexContent = indexContent.replace(installPattern, newInstallBlock);
  }

  fs.writeFileSync(indexFilePath, indexContent);

  console.log(chalk.green(`✅ 组件 ${name} 创建成功！`));
  console.log(chalk.blue(`位置: ${indexPath}`));
}

async function createHook(name) {
  const hookDir = path.join(__dirname, '../src/hooks');

  const hookFileName = `use${name}.js`;
  const hookFilePath = path.join(hookDir, hookFileName);

  if (fs.existsSync(hookFilePath)) {
    console.error(chalk.red(`Hook use${name} 已存在！`));
    return;
  }

  // 创建Hook文件
  const hookTemplate = `import { ref, computed } from 'vue';

export default function use${name}(${args.length > 2 ? args[2] : ''}) {
  // 在这里添加Hook逻辑
  const state = ref(null);
  
  // 在这里添加响应式数据和方法
  
  return {
    state
    // 返回需要暴露的数据和方法
  };
}
`;

  fs.writeFileSync(hookFilePath, hookTemplate);

  // 更新组件库入口文件
  const indexFilePath = path.join(__dirname, '../src/index.js');
  let indexContent = fs.readFileSync(indexFilePath, 'utf-8');
  
  // 添加导入语句
  const importStatement = `export { default as use${name} } from './hooks/use${name}';`;
  if (!indexContent.includes(importStatement)) {
    indexContent = indexContent.replace(
      /(\/\/\s*导出所有 hooks)/,
      `$1\n${importStatement}`
    );
  }

  fs.writeFileSync(indexFilePath, indexContent);

  console.log(chalk.green(`✅ Hook use${name} 创建成功！`));
  console.log(chalk.blue(`位置: ${hookFilePath}`));
}

async function main() {
  if (args.length === 0) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: '请选择要执行的操作:',
        choices: [
          { name: '创建组件', value: 'component' },
          { name: '创建Hook', value: 'hook' }
        ]
      }
    ]);

    const { name } = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `请输入${action === 'component' ? '组件' : 'Hook'}名称:`,
        validate: input => {
          if (!input.trim()) return '名称不能为空!';
          if (action === 'component' && !/^[A-Z][a-zA-Z]*$/.test(input)) {
            return '组件名称应该以大写字母开头，遵循PascalCase命名规范';
          }
          if (action === 'hook' && !/^[A-Z][a-zA-Z]*$/.test(input)) {
            return 'Hook名称应该以大写字母开头，遵循PascalCase命名规范';
          }
          return true;
        }
      }
    ]);

    if (action === 'component') {
      await createComponent(name);
    } else {
      await createHook(name);
    }
  } else {
    const [action, name] = args;
    
    if (action === 'create' && name) {
      const { type } = await inquirer.prompt([
        {
          type: 'list',
          name: 'type',
          message: '请选择创建类型:',
          choices: [
            { name: '组件', value: 'component' },
            { name: 'Hook', value: 'hook' }
          ]
        }
      ]);
      
      if (type === 'component') {
        await createComponent(name);
      } else {
        await createHook(name);
      }
    } else {
      console.log(chalk.yellow('请指定操作和名称，例如: npm run new create MyComponent'));
    }
  }
}

main().catch(err => {
  console.error(chalk.red(err));
});