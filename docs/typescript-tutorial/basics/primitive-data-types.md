# 原始数据类型

ECMASript 中原始数据类型包括：**布尔值、字符串、数值、null、undefined、ES6 中的 Symbol、ES10 中的 BigInt**

## 布尔值

- 使用 `boolean` 定义布尔值类型

```javascript
let isDone: boolean = true;
```

- 注意的：使用构造函数 `Boolean` 创建的对象不是布尔值

```javascript
let createByBoolean: boolean = new Boolean(false);
```

- 事实上 `new Boolean()` 返回的是 `Boolean` 对象

```javascript
let createByBooleanObj: Boolean = new Boolean(1);
```

- 直接调用 `Boolean` 也返回的一个 `boolean` 类型

```javascript
let createByBooleanVal: boolean = Boolean(1);
```

:::tip 提示
在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样。
:::

## 空值

JavaScript 中没有空值（`void`）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数；

声明一个 `void` 类型的变量没有什么用，因为只能将它赋值为 `undefined` 和 `null` （只在 --strictNullChecks 未指定时）。

## null 和 undefined

- 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

```javascript
let u: undefined = undefined;
let n: null = null;
```

- 与 void 的区别是，undefined 和 null 是**所有类型的子类型**。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

```javascript
let num: number = undefined;

let u: undefined;
let num: number = u;
```

- 而 void 类型的变量不能赋值给 number 类型的变量：

```javascript
// error: Type 'void' is not assignable to type 'number'.
let v: void;
let num: number = v;
```
