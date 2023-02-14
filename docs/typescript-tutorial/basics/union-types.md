# 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。联合类型使用 | 分隔每个类型。

```ts
let myFavoriteNumber: number | string;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;

myFavoriteNumber = true; // Error: Type 'boolean' is not assignable to type 'string | number'
```

这里的 `let myFavoriteNumber: string | number` 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型

## 访问联合类型的属性或方法

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

```ts
let myFavoriteNumber: number | string;

myFavoriteNumber = "seven";
myFavoriteNumber.length; // string 有 length 属性
myFavoriteNumber.toString(); // 访问共有方法

myFavoriteNumber = 7;
myFavoriteNumber.length; // number 类型没有 length 属性，这里报错
myFavoriteNumber.toString(); // 访问共有方法
```

联合类型的变量在被赋值的时候，**会根据类型推论的规则推断出一个类型**；
