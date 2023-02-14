# 简介

参考[TypeScript 入门教程](https://ts.xcatliu.com/), [github 仓库](https://github.com/xcatliu/typescript-tutorial)

## 什么是 TypeScript

JavaScript 是一门非常灵活的编程语言：

- 它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。
- 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。
- 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。
- 函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。

TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点

## 安装 TypeScript

全局安装：`npm install -g typescript`

## hello typescript

```typescript
console.log("Hello TypeScript!");
```

通过命令编译成 JS 代码： `tsc ./index.ts`，会生成一个编译后的 JS 文件；

- TypeScript 只会在编译时对类型进行**静态检查**，如果发现有错误，编译的时候就会报错；
- TypeScript 编译的时候即使报错了，还是会生成编译结果；

> 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。关于 tsconfig.json，[点击查看官方手册](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。
