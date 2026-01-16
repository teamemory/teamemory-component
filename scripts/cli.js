#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function createComponent() {
  const name = await askQuestion('请输入组件名称: ');
  
  if (!name) {
    console.log('组件名称不能为空');
    rl.close();
    return;
  }

  // 将组件名转换为PascalCase
  const pascalCaseName = name.replace(/(^w|-w)/g, (m) => m[1] ? m[1].toUpperCase() : m.toUpperCase());
  const kebabCaseName = name.replace(/[A-Z]/g, '-$&').slice(1).toLowerCase();

  const componentDir = path.join(__dirname, '../packages/components', kebabCaseName);

  // 创建组件目录
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // 创建组件tsx文件
  const componentContent = `import { defineComponent, computed } from 'vue';
import { css } from '@emotion/css';

export interface ${pascalCaseName}Props {
  children?: any;
  className?: string;
  [key: string]: any;
}

export default defineComponent({
  name: 'Tm${pascalCaseName}',
  
  props: {
    className: String
  },
  
  setup(props, { slots, attrs }) {
    const classes = computed(() => 
      css`
        display: block;
        padding: 12px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        background-color: #fff;
      `
    );

    return () => (
      <div class={`${classes.value} ${props.className}`} {...attrs}>
        {slots.default?.()}
      </div>
    );
  }
});
`;

  fs.writeFileSync(path.join(componentDir, 'index.tsx'), componentContent);

  // 创建index.ts导出文件
  const indexContent = `import Tm${pascalCaseName} from './index';

export { Tm${pascalCaseName} };
export type { ${pascalCaseName}Props } from './index';
`;

  fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);

  console.log(`✅ 组件 ${kebabCaseName} 创建成功！`);
  console.log(`📁 路径: packages/components/${kebabCaseName}/`);

  rl.close();
}

async function createHook() {
  const name = await askQuestion('请输入Hook名称 (例如: useModal): ');

  if (!name || !name.startsWith('use')) {
    console.log('Hook名称必须以 "use" 开头');
    rl.close();
    return;
  }

  const hookDir = path.join(__dirname, '../packages/hooks', name);

  // 创建Hook目录
  if (!fs.existsSync(hookDir)) {
    fs.mkdirSync(hookDir, { recursive: true });
  }

  // 创建Hook文件
  const hookContent = `import { ref, Ref } from 'vue';

interface ${name.charAt(3).toUpperCase() + name.slice(4)}Return {
  value: Ref<boolean>;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}

export const ${name} = (): ${name.charAt(3).toUpperCase() + name.slice(4)}Return => {
  const value = ref(false);

  const toggle = () => {
    value.value = !value.value;
  };

  const show = () => {
    value.value = true;
  };

  const hide = () => {
    value.value = false;
  };

  return {
    value,
    toggle,
    show,
    hide
  };
};
`;

  fs.writeFileSync(path.join(hookDir, 'index.ts'), hookContent);

  console.log(`✅ Hook ${name} 创建成功！`);
  console.log(`📁 路径: packages/hooks/${name}/`);

  rl.close();
}

async function main() {
  const action = process.argv[2];
  
  switch (action) {
    case 'create':
      const type = await askQuestion('请选择创建类型 (component/hook): ');
      
      if (type === 'component') {
        await createComponent();
      } else if (type === 'hook') {
        await createHook();
      } else {
        console.log('不支持的类型，请输入 component 或 hook');
        rl.close();
      }
      break;
      
    default:
      console.log('Usage: npm run new [create]');
      console.log('Examples:');
      console.log('  npm run new create - 创建新组件或Hook');
      rl.close();
  }
}

main().catch(console.error);
