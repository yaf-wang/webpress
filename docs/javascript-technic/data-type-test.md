# JS 中数据检测方式

## typeof

返回一个字符串，只能用于检测基础类型和引用类型

| 类型         | 结果                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Undefined    | "undefined"                                                                                                        |
| Null         | "object"（[原因](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)） |
| Boolean      | "boolean"                                                                                                          |
| Number       | "number"                                                                                                           |
| BigInt       | "bigint"                                                                                                           |
| String       | "string"                                                                                                           |
| Symbol       | "symbol"                                                                                                           |
| Function     | （在 ECMA-262 中实现 `[[Call]]`；classes 也是函数) "function"                                                      |
| 其他任何对象 | "object"                                                                                                           |

### `typeof null`

```js
typeof null === "object"; // true, null 返回的 object
```

### `typeof NaN`

```js
typeof NaN === "number"; // true
```

### 使用 new 操作符

所有使用 new 调用的构造函数都返回非基础类型（"object" 或 "function"）。

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### `document.all`

```js
typeof document.all; // undefined
```

虽然 `document.all` 也是假值，与 undefined 非严格相等，但它不是 undefined。在 Web 标准中，`document.all` 具有 "undefined" 类型的情况被归类为“故意违反”原始 ECMAScript Web 兼容性标准。

### typeof 操作符优先级问题

```js
typeof 1 + "javascript"; // numberjavascript

"javascript" + typeof 1; // javascriptnumber

typeof (1 + "javascript"); // string
```

## instanceof

用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

## constructor

指向创建该实例对象的构造函数

:::warning 注意
null 和 undefined 没有 constructor，以及 constructor 可以被改写
:::

## `Object.prototype.tostring.call()`

利用函数动态 this 的特性

`Object.prototype.toString()` 返回 `[object Type]`，这里的 Type 是对象的类型。如果对象有 `Symbol.toStringTag` 属性，其值是一个字符串，则它的值将被用作 Type。
