# void 运算符

void 运算符对给定的表达式进行求值，然后返回 `undefined`。void 运算符通常只用于获取 `undefined` 的原始值，一般使用 void(0)（等同于 void 0）。

语法： `void expression`

## 一元运算符 void 的作用

void 在 ECMAScript 262 规范如下：

> The void Operator
>
> The production UnaryExpression : void UnaryExpression is evaluated as follows:
>
> Let expr be the result of evaluating UnaryExpression.
> Call GetValue(expr).
> Return undefined.
> NOTE: GetValue must be called even though its value is not used because it may have observable side-effects.

void 的行为特点为：

- 不管 void 后的运算数是什么，只管返回纯正的 undefined；
- void 会对其后的运算数作取值操作，因此若属性有个 getter 函数，那么就会调用 getter 函数（因此会产生副作用）

:::warning 注意
需要注意考虑 void 运算符的优先级，以下加括号的表达式的例子可以帮助你清楚地理解 void 操作符的优先级：
:::

```js
var article = {
  _view: 0,
  get view() {
    console.log(this._view);
    return this._view++;
  },
};
var test = void article.view; // 显示0
console.log(test); // 显示undefined
console.log(article._view); // 显示1
```

## `void 0 === undefined `

书写如下代码时 `name = person?.name` 会被预编译为 `var name = typeof person !== "undefined" && person !== null ? person.name : void 0;` ，那么 `void 0` 到底是什么意思呢？运行得知 `void 0 === undefined` 为 true。那为什么不直接使用 `undefined` 而要使用 `void 0` 呢？而一元运算符 `void` 具体又有什么作用呢？

### 为什么不直接使用 `undefined`

`undefined` 在 JavaScript 中并不属于保留字/关键字，因此在 IE5.5~8 中我们可以将其当作变量那样对其赋值（IE9+及其他现代浏览器中赋值给 `undefined` 将无效）

```js
var undefinedBackup = undefined;
undefined = 1;

// 显示"undefined"
console.log(typeof undefinedBackup);

// 在IE5.5~8中显示"number"，其他浏览器中则显示"undefined"
console.log(typeof undefined);
```

于是采用 void 方式获取 undefined 则成了通用准则。

## 立即调用函数表达式

在使用[立即调用的函数](/javascript-technic/iife.html)表达式时，`function` 关键字不可直接位于语句开头，因为该表达式会被解析为函数声明，并会在解析到代表调用的括号时产生语法错误。如果是匿名函数，那么如果函数被解析为声明，就会立即产生语法错误；

错误示例：

```js
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

为了使函数被解析为表达式，function 关键字必须出现在一个只接受表达式而不是语句的位置。这可以通过在关键字前加一个一元运算符来实现，它只接受表达式作为操作数。函数调用的优先级比一元运算符高，所以它将被首先执行。它的返回值（几乎总是 undefined）将被传递给一元运算符，然后立即被丢弃。

```js
void (function () {
  console.log("Executed!");
})();
```

## `javascript: void(0)`

JavaScript URI

当用户点击一个以 `javascript:` 开头的 URI 时，它会执行 URI 中的代码，然后用返回的值替换页面内容，除非返回的值是 undefined。void 运算符可用于返回 undefined。例如：

```html
<a href="javascript:void(0);"> 这个链接点击之后不会做任何事情 </a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  点击这个链接会让页面背景变成绿色。
</a>
```

:::warning
利用 `javascript:` 伪协议来执行 JavaScript 代码是不推荐的，推荐的做法是为链接元素绑定事件。
:::

## 在箭头函数中避免泄漏

箭头函数标准中，允许在函数体不使用括号来直接返回值。如果右侧调用了一个原本没有返回值的函数，其返回值改变后，则会导致非预期的副作用。安全起见，当函数返回值不会被使用到的时候，应该使用 void 运算符，来确保 API 改变时，并不会改变箭头函数的行为。

```js
button.onclick = () => void doSomething();
```

这确保了当 doSomething 的返回值从 undefined 变为 true 的时候，不会改变代码的行为。

[查看 void 运算符文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void)
