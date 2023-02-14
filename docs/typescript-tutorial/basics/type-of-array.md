# 数组的类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活。

## 「类型 + 方括号」表示法

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

数组的项中**不允许**出现其他的类型：

## 数组泛型

使用数组泛型（Array Generic） `Array<elemType>` 来表示数组

```ts
let finbonacci: Array<number> = [1, 2, 3];
```

## 用接口表示数组

接口也可以用来描述数组：

```ts
interface NumberArray {
  [index: number]: number;
}
let finbonacci: NumberArray = [1, 2, 3];
```

`NumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

不过有一种情况例外，那就是它常用来表示类数组。

## 类数组

类数组（Array-like Object）不是数组类型，比如 arguments：

```ts
function sum() {
  let args: number[] = arguments;
}
// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.(2740)
```

arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口

```ts
function sum() {
  let args: {
    [index: number]: any;
    length: number;
    callee: Function;
  } = arguments;
}
```

事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：

```ts
function sum() {
  let args: IArguments = arguments;
}
```

其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：

```ts
interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}
```
