# webpack 面试

## 如何借助 webpack 优化前端项目

## 如何提高 webpack 的构建速度

- 优化 loader 配置：使用 exclude、include 配置，减少打包资源；
- 合理使用 `resolve.extensions`：通过合理配置加载配置后缀，减少不必要搜索；
- 优化 `resolve.modules`：通常第三方依赖在 `node-modules` 目录，可以通过配置为绝对路径，减少依赖目录搜索。
- 优化 `resolve.alias`：通过配置 alias 以减少查找过程。
- 使用 `DLLPLugin` 插件：使用 DllPlugin 为更改不频繁的代码生成单独的编译结果。这可以提高应用程序的编译速度，尽管它增加了构建过程的复杂度。
- 使用 `cache-loader`：对性能开销较大的 loader 使用此 loader，提升再次打包的速度。
- `terser` 启动多线程
- 合理使用 `source-map`

### 优化 loader 配置

在使用 loader 时，可以通过配置 include、exclude、test 属性来匹配文件。通过使用 include 字段，仅将 loader 应用在实际需要将其转换的模块；

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        // 如果项目源码中只有 js 文件就不要写成 /\.jsx?$/，提升正则表达式性能
        test: /\.js$/,
        // 只对项目根目录下的 src 目录中的文件采用 babel-loader
        include: path.resolve(__dirname, "src"),
        loader: ["babel-loader"],
      },
    ],
  },
};
```

### 优化 `resolve.alias`

alias 给一些常用的路径起一个别名，特别当我们的项目目录结构比较深的时候，一个文件的路径可能是`./../../`的形式

通过配置 alias 以减少查找过程

```js
module.exports = {
  //....
  resolve: {
    alias: {
      "@": Path.resolve(__dirname, "src"),
    },
  },
};
```
