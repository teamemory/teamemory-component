const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 开始构建组件库...');

try {
  // 清除之前的构建产物
  const distPath = path.join(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
  }

  // 构建ESM模块
  console.log('🏗️ 构建ESM模块...');
  execSync('rollup -c --environment FORMAT:esm', { stdio: 'inherit' });

  // 构建CJS模块
  console.log('🏗️ 构建CJS模块...');
  execSync('rollup -c --environment FORMAT:cjs', { stdio: 'inherit' });

  // 构建TypeScript类型定义
  console.log('📝 生成类型定义...');
  execSync('npx tsc --emitDeclarationOnly --outDir dist/types', { stdio: 'inherit' });

  // 复制package.json到dist目录
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const minimalPackageJson = {
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
    keywords: packageJson.keywords,
    author: packageJson.author,
    license: packageJson.license,
    homepage: packageJson.homepage,
    repository: packageJson.repository,
    bugs: packageJson.bugs,
    main: './cjs/index.cjs',
    module: './esm/index.mjs',
    types: './types/index.d.ts',
    exports: packageJson.exports,
    dependencies: packageJson.dependencies,
    peerDependencies: {
      vue: '^3.3.4',
      '@emotion/css': '^11.11.0'
    }
  };
  
  fs.writeFileSync(
    path.join(__dirname, '../dist/package.json'),
    JSON.stringify(minimalPackageJson, null, 2)
  );

  // 复制README和其他必要文件
  ['README.md', 'LICENSE'].forEach(file => {
    const filePath = path.join(__dirname, '../', file);
    if (fs.existsSync(filePath)) {
      fs.copyFileSync(filePath, path.join(__dirname, '../dist/', file));
    }
  });

  console.log('✅ 组件库构建完成！');
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}
