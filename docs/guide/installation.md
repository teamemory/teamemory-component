# 安装

## 使用 npm

```bash
npm install @teamemory/components
```

## 使用 pnpm

```bash
pnpm add @teamemory/components
```

## 使用 yarn

```bash
yarn add @teamemory/components
```

## 依赖要求

本组件库依赖以下包，请确保项目中已安装：

```json
{
  "dependencies": {
    "vue": "^3.3.4",
    "element-plus": "^2.3.6",
    "@emotion/css": "^11.11.0"
  }
}
```

如果您的项目中还未安装这些依赖，请先安装：

```bash
npm install vue@^3.3.4 element-plus@^2.3.6 @emotion/css@^11.11.0
```

## 注意事项

1. 组件库的依赖已配置为 `peerDependencies`，不会自动安装，需要手动安装上述依赖。
2. 推荐使用 Vue 3.3.4 或更高版本。
3. Element Plus 和 Emotion CSS 是必要的运行时依赖。
