#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node scripts/cli.js [command] [options]');
  console.log('Commands:');
  console.log('  create <component-name>   Create a new component');
  console.log('  create-hook <hook-name>   Create a new hook');
  process.exit(1);
}

const command = args[0];
const name = args[1];

if (!name) {
  console.error('Error: Please provide a name for the component/hook');
  process.exit(1);
}

// Ensure the command is either 'create' or 'create-hook'
if (command !== 'create' && command !== 'create-hook') {
  console.error(`Error: Unknown command '${command}'. Use 'create' or 'create-hook'`);
  process.exit(1);
}

if (command === 'create') {
  createComponent(name);
} else if (command === 'create-hook') {
  createHook(name);
}

function createComponent(componentName) {
  const capitalizedComponentName = capitalizeFirstLetter(componentName);
  const componentDir = path.join(__dirname, '..', 'src', 'components', componentName.toLowerCase());

  // Create directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  // Create index.jsx file
  const jsxContent = `import { css } from '@emotion/css';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tm${capitalizedComponentName}',
  props: {
    // Add your props here
  },
  setup(props, { slots }) {
    const componentStyle = css\`
      /* Add your styles here */
      padding: 10px;
    \`;

    return () => (
      <div class={componentStyle}>
        {slots.default?.()}
      </div>
    );
  }
});
`;
  
  const indexPath = path.join(componentDir, 'index.jsx');
  fs.writeFileSync(indexPath, jsxContent);

  console.log(`✓ Created component: ${componentName}`);
  console.log(`  File: ${indexPath}`);

  // Update main index.js to export the new component
  const mainIndexPath = path.join(__dirname, '..', 'src', 'index.js');
  let mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8');
  
  // Import statement
  const importStatement = `import Tm${capitalizedComponentName} from './components/${componentName.toLowerCase()}';`;
  if (!mainIndexContent.includes(importStatement)) {
    mainIndexContent = importStatement + '\n' + mainIndexContent;
  }
  
  // Export statement
  const exportStatement = `export { Tm${capitalizedComponentName} };`;
  if (!mainIndexContent.includes(exportStatement)) {
    const lastExportLine = mainIndexContent.lastIndexOf('};');
    const lines = mainIndexContent.split('\n');
    const lastExportIndex = lines.findIndex((line, idx) => {
      return mainIndexContent.substring(0, mainIndexContent.indexOf(line) + line.length).lastIndexOf('};') === lastExportLine;
    });
    
    if (lastExportIndex !== -1) {
      lines.splice(lastExportIndex, 0, `  ${exportStatement.replace('};', ',')}`);
      mainIndexContent = lines.join('\n');
    } else {
      mainIndexContent = mainIndexContent.replace(/};\n$/, `  ${exportStatement.replace('};', ',')}\n};\n`);
    }
  }
  
  // Install in the TeamemoryComponents object
  const installPattern = /app\.component\('Tm[A-Z]\w+', \w+'\);/;
  const lastInstallMatch = [...mainIndexContent.matchAll(new RegExp(installPattern, 'g'))].pop();
  
  if (lastInstallMatch) {
    const installStatement = `    app.component('Tm${capitalizedComponentName}', Tm${capitalizedComponentName});`;
    const lastIndex = mainIndexContent.lastIndexOf(lastInstallMatch[0]);
    const insertPosition = lastIndex + lastInstallMatch[0].length;
    mainIndexContent = mainIndexContent.substring(0, insertPosition) + '\n' + installStatement + mainIndexContent.substring(insertPosition);
  } else {
    // If no component installations found, add after the install method starts
    const installStart = mainIndexContent.indexOf('  install(app) {');
    if (installStart !== -1) {
      const installStatement = `    app.component('Tm${capitalizedComponentName}', Tm${capitalizedComponentName});`;
      const nextLine = mainIndexContent.indexOf('\n', installStart);
      mainIndexContent = mainIndexContent.substring(0, nextLine + 1) + '    ' + installStatement + '\n' + mainIndexContent.substring(nextLine + 1);
    }
  }
  
  fs.writeFileSync(mainIndexPath, mainIndexContent);

  console.log(`✓ Updated src/index.js to export the component`);
  
  // Create documentation file
  const docsDir = path.join(__dirname, '..', 'docs', 'components');
  const docFilePath = path.join(docsDir, `${componentName.toLowerCase()}.md`);
  
  const docContent = `# ${capitalizedComponentName} Component

Describe the ${componentName} component here.

## Basic Usage

Basic usage example of the ${componentName} component.

::: demo Basic usage of ${componentName}
\`\`\`vue
<template>
  <tm-${componentName.toLowerCase()}>
    <!-- Content goes here -->
  </tm-${componentName.toLowerCase()}>
</template>

<script>
export default {
  setup() {
    // Setup logic here
  }
};
</script>
\`\`\`
:::

## Attributes

| Attribute | Description | Type | Default |
| --------- | ----------- | ---- | ------- |
| --        | --          | --   | --      |

## Events

| Event Name | Description | Parameters |
| ---------- | ----------- | ---------- |
| --         | --          | --         |

## Slots

| Slot Name | Description |
| --------- | ----------- |
| default   | --          |
`;

  fs.writeFileSync(docFilePath, docContent);
  console.log(`✓ Created documentation: ${docFilePath}`);
}

function createHook(hookName) {
  const hookFileName = `use${capitalizeFirstLetter(hookName)}`;
  const hookDir = path.join(__dirname, '..', 'src', 'hooks');
  const hookPath = path.join(hookDir, `${hookFileName}.js`);

  // Create hooks directory if it doesn't exist
  if (!fs.existsSync(hookDir)) {
    fs.mkdirSync(hookDir, { recursive: true });
  }

  // Create hook file
  const hookContent = `import { ref, computed } from 'vue';

export default function ${hookFileName}(initialValue) {
  const value = ref(initialValue);
  
  // Add your hook logic here
  
  return {
    value
  };
}
`;

  fs.writeFileSync(hookPath, hookContent);
  console.log(`✓ Created hook: ${hookFileName}`);
  console.log(`  File: ${hookPath}`);

  // Update main index.js to export the new hook
  const mainIndexPath = path.join(__dirname, '..', 'src', 'index.js');
  let mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8');
  
  // Import statement
  const importStatement = `export { default as ${hookFileName} } from './hooks/${hookFileName}';`;
  if (!mainIndexContent.includes(importStatement)) {
    // Find the hooks section and add the import
    const hooksExportsStart = mainIndexContent.indexOf('// 导出hooks');
    if (hooksExportsStart !== -1) {
      const nextLinePos = mainIndexContent.indexOf('\n', hooksExportsStart);
      mainIndexContent = mainIndexContent.substring(0, nextLinePos + 1) + importStatement + '\n' + mainIndexContent.substring(nextLinePos + 1);
    } else {
      // If no hooks section found, add after other exports
      mainIndexContent = mainIndexContent.replace(
        /(\/\/ 导出组件[\s\S]*?)(\n\/\/ 导出hooks)/, 
        `$1\n${importStatement}$2`
      ) || mainIndexContent.replace(
        /(\n};\n\/\/ 全局注册组件库)/, 
        `\n${importStatement}$1`
      );
    }
  }
  
  fs.writeFileSync(mainIndexPath, mainIndexContent);
  console.log(`✓ Updated src/index.js to export the hook`);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}