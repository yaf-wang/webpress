# 类型推断

如果没有明确指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型。

## 什么是类型推论

```ts
let num = 1;
num = "22"; // Error: type 'string' is not assignable to type 'number'
```

事实上， 等价于：

```ts
let num: number = 1;
num = "22"; // Error: type 'string' is not assignable to type 'number'
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：**

```ts
let myFavoriteNumber;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
```
