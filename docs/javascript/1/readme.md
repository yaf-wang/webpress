# 语言基础

- 语法
- 数据类型
- 流控制语句
- 理解函数

## 3.1 语法

- 区分大小写；
- 标示符（即变量、函数、属性、函数参数名称），命名规则如下：
  - 第一个字符必须是字母、下划线、美元符号；
  - 剩下字符可以是字母、下划线、美元符号、数字；
  - 按照 ECMAScript 标示符使用驼峰大小写
- 单行注释、块注释；
- 严格模式（"use strict"）;
- 语句，ECMAScript 中语句以分号结尾，代码块由花括号闭合（例如：if(true){}）；

## 3.2、关键字和保留字

## 3.3、变量

变量声明 var、let、const

- var 函数作用域，let、const 块级作用域；
- var 存在变量提升，let、const 不会提升；
- let、const 存在暂时性死区（意味着 typeof 不再是一个百分百安全的操作）；
- let、const 不允许重复声明；
- let、const 在全局作用下声明不会成为 window 对象的属性，
- const 声明一个常量，声明时必须初始化值；

## 3.4、数据类型

ECMScript 有 6 种简单数据类型（原始类型）：_String、 Number、Boolean、symbol、undefined、null_，-种复杂的数据类型：_Object_。

### 3.4.1 typeof 操作符

typeof 判断变量类型， 返回结果是字符串；

| 结果      | 说明                 |
| --------- | -------------------- |
| undefined | 表示值未定义         |
| string    | 表示值为字符串       |
| number    | 表示值为数字         |
| boolean   | 表示值布尔值         |
| object    | 表示值为对象 或 null |
| function  | 表示值为函数         |
| symbol    | 表示值为符号         |

> let 声明存在暂时性死区，typeof 使用存在隐患。typeof 无法区分出 Array，判断类型其他方式：基于原型链检测 instanceof 和 Object.prototype.toString({})

### 3.4.2 undefined

undefined 是一个特殊值，未定义，它是*假值*；一般来说，_不会显示地给某一个变量赋 undefined 值_；undefined 主要是明确空对象指针（null）和未初始化变量的区别；

- 直接调用未声明变量

```javascript
let message;

// let age;

console.log(message); // undefined
console.log(age); // error
```

- 在对未声明过的变量调用 typeof

```javascript
let message;

// let age;

console.log(typeof message); // "undefined"
console.log(typeof age); // "undefined"
```

### 3.4.3 Null

null 值表示*一个空对象指针*，这也是使用 typeof 返回 "object" 的原因；在定义将来保存对象值的变量时，_建议使用 null 来初始化_。

- undefined 值是由 null 派生而来，因此 ECMA-262 将它们定义为表面上相等

```javascript
null == undefined; // true
```

### 3.4.4 Boolean

它有两个值：_true 和 false_，区分大小写；不同类型与布尔值之间转换规则：

| 数据类型  | 转为 true 的值         | 转为 false 的值 |
| --------- | ---------------------- | --------------- |
| Boolean   | true                   | false           |
| String    | 非空字符串             | 空字符串        |
| Number    | 非零数字（包含无穷值） | 0, NaN          |
| Object    | 任意对象               | null            |
| Undefined | N/A (不存在)           | undefined       |

### 3.4.5 Number 类型

Number 类型使用 [双精度 IEEE 754 64 位浮点](https://en.wikipedia.org/wiki/Floating-point_arithmetic) 表示整数和浮点值（也称双精度值）。

- 十进制字面量：最基本的数值字面量格式；

- 八进制字面量：第一个数字必须是零（0o），然后是相应的八进制数字（数值：0-7），超出应有的范围，则忽略前缀的零，后面的数值序列会被当成十进制数，严格模式下是无效的。

- 十六进制字面量：前缀 0x（区分大小写），然后十六进制数字（0-9|A-F，字母不区分大小写）；

- 正零（+0）和 负零（-0） 在所有情况下是等同的

> 八进制问题：很多实现环境仍然把以 0 开头的数值字符串（numeric string）解释为一个八进制数，但是 ECMAScript 5 已经禁止了这种做法；

```javascript
var num = 10; // 10

var num1 = 012; // 八进制 10

var num2 = 0xa; // 十六进制 10

+0 == -0; // true
+0 === -0; // true
```

#### 浮点值

#### 值的范围

- ECMAScript 最小数值保存在 `Number.MIN_VALUE`;
- ECMAScript 最大数值保存在 `Number.MAX_VALUE`;
- 当计算结果超出范围，自动转换为 `Infinity` 或 `-Infinity`;

#### NaN

- NaN 表示 Not a Number（不是一个数字）;
- 任何涉及 NaN 的操作始终返回 NaN;
- NaN 不等于包括 NaN 在内的任何值；
- `isNaN()` 函数判断 是否"不是数字"，_任何不能转换为数值的值都会导致函数返回 true_；

> 在其他语言 0 作为除数，会被抛出错误，而在 JavaScript 中返回 NaN。
>
> isNaN() 首先会调用对象的 valueOf() 方法，然后再确定返回值是否可以转换为数值。如果不能，在调用 toString() 方法，并测试其返回值。

```javascript
0 / 0; // NaN
0 / +0; // NaN

// 分子为非 0 值
3 / 0; // Infinity
3/ -0； // -Infinity

NaN === NaN; // false

// isNaN 存在数据强制转换
isNaN('a'); // true
isNaN(NaN); // true
isNaN(1); // false
isNaN('1'); // false
isNaN(true); // false
isNaN(false); // false
```

#### 数值转换

数值转换函数有：Number(), parseInt()，parseFloat()。

- Number() 函数转换规则：

| 类型           | 转换规则（返回值）                                                                                                                                                                                                                                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 布尔值 Boolean | true 为 1， false 为 0                                                                                                                                                                                                                                                                                                                       |
| 数值 Number    | 原值                                                                                                                                                                                                                                                                                                                                         |
| null           | 0                                                                                                                                                                                                                                                                                                                                            |
| undefined      | NaN                                                                                                                                                                                                                                                                                                                                          |
| 字符串 String  | 1. 字符串包含数值字符，包括数值字符前面带加、减号，这转换成十进制数值。<br/>2. 如果字符串包含有效的浮点值格式，则会转换为相应的浮点值；<br />3. 如果字符串包含有效的十六进制格式，则会转换为与该十六进制值对应的十进制整数数值；<br />4. 如果是空字符串（不包含字符），则返回 0；<br />5. 如果字符串包含上述情况之外的其他字符，则返回 NaN； |
| 对象 Object    | 调用 valueof()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用 toString() 方法，再按照转换字符串的规则转换。                                                                                                                                                                                                                     |

- parseInt()[查看参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
  - 字符串最前面的空格会被忽略，从第一个非空格字符开始转换；
  - 如果第一个字符串不是数值字符、加号、减号，立即返回 NaN，因此空字符串返回 NaN（这一点跟 Number（）不一样;
  - 可以解析 八进制、十六进制，同时也可以接受第二个参数，表示进制数(推荐指定进制数);
- parseFloat()
  - 只能解析十进制值，不能指定底数，始终忽略字符串开头的零，十六进制数值始终会返回 0；

```javascript
// Number
Number(true); // 1
Number(false); // 0
Number(11); // 11
Number(null); // 0
Number(undefined); // NaN
Number(""); // 0
Number({
  valueOf: function () {
    return "3.14";
  },
}); // 3.14

// parseInt
parseInt(""); // NaN，这个是 Number 不同
parseInt(" 0012"); // 12
parseInt(" -0012"); // -12

// parseFloat
parseFloat("aaa"); // NaN
parseFloat("123aa"); // 解析为整数 123
parseFloat(" 000123.12"); // 忽略前面的零、空格 123.12
parseFloat("0x12"); // 十六进制 0
parseFloat("0.0314E+2"); // 3.14
parseFloat("3.14.15"); // 第二次出现小数点无效 3.14
parseFloat({
  toString: function () {
    return "3.14";
  },
}); // toString 3.14
```

### 数值存储

#### 32 位单精度

最高位时符号位 S，8 位是指数位 E，23 位有效数字 M;

#### 64 位双精度

最高位是符号位 S，11 位是指数位 E，52 位是有效数字 M;

#### 原码

原码就是用第一位表示符号位，其余位表示值;

#### 反码

反码是在原码的基础上符号位不变，其余的位数取反;

#### 补码

- 正数的补码为它本身，
- 负数的补码为其反码+1
