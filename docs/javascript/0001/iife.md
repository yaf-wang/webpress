# 深入理解立即执行函数

立即执行函数常用于第三方库，它可以用来隔离变量作用域，很多第三方库都会存在大量的变量和函数，在 ES5 环境下为了避免变量污染，开发者想到的解决办法就是使用立即执行函数。

## 概念

IIFE 的全称为 Immediately Invoked Function Expression。声明一个函数，并马上调用这个匿名函数就叫做立即执行函数；也可以说立即执行函数是一种语法，让你的函数在定义以后立即执行。

## 常用写法

定义函数之后，立即调用该函数，这时不能在函数的定义后面直接加圆括号，这会产生语法错误。产生语法错误的原因是，function 这个关键字，既可以当做语句，也可以当做表达式。

```js
// 语句
function fn() {}

// 表达式
var fn = function () {};
```

为了避免解析上的歧义，JS 引擎规定，**如果 function 出现在行首，一律解析成语句**。因此 JS 引擎看到行首是 function 关键字以后，认为这一段都是函数定义，不应该以原括号结尾，所以就报错了。

解决方法就是不要让 function 出现在行首，让 JS 引擎将其理解为一个表达式，最简单的处理就是将其放在一个圆括号里。

- 函数体后面要有小括号
- 函数体必须是函数表达式而不能是函数声明

```js
(function () {
  //code
})();

(function () {
  //code
})();
```

以上两种写法，都是以圆括号开头，引擎会意味后面跟的是表达式，而不是一个函数定义语句，所以就避免了错误，这就叫做"立即调用的函数表达式"。

立即执行函数，还有一些其他的写法（加一些小东西，不让解析成语句就可以）。

```js
//用括号把整个表达式包起来
(function () {
  alert("我是匿名函数");
})();

//用括号把函数包起来
(function () {
  alert("我是匿名函数");
})();

!(function () {
  alert("我是匿名函数");
})();

+(function () {
  alert("我是匿名函数");
})();

-(function () {
  alert("我是匿名函数");
})();

~(function () {
  alert("我是匿名函数");
})();

void (function () {
  alert("我是匿名函数");
})();

new (function () {
  alert("我是匿名函数");
})();
```

## 作用

立即执行函数会形成一个单独的作用域，我们可以封装一些临时变量或者局部变量，避免污染全局变量。

- 不必为函数命名，避免了污染全局变量
- 立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量
- 封装变量

## 使用场景

1. 在页面加载完成之后，不得不执行一些设置工作，比如时间处理器，创建对象等等。
2. 所有的这些工作只需要执行一次，比如只需要显示一个时间。
3. 但是这些代码也需要一些临时的变量，但是初始化过程结束之后，就再也不会被用到，如果将这些变量作为全局变量，不是一个好的注意，我们可以用立即执行函数——去将我们所有的代码包裹在它的局部作用域中，不会让任何变量泄露成全局变量，看如下代码：

```js
var today = (function () {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  return year + "年" + month + "月" + day + "日";
})();
```

比如上面的代码，如果没有被包裹在立即执行函数中，那么临时变量 today,year,month,day 都将成为全局变量（初始化代码遗留的产物）。用立即执行函数之后，这些变量都不会在全局变量中存在，以后也不会其他地方使用，有效的避免了污染全局变量。

## 常见面试题

```html
<body>
  <ul id="list">
    <li>公司简介</li>
    <li>联系我们</li>
    <li>营销网络</li>
  </ul>
  <script>
    var list = document.getElementById("list");
    var li = list.children;
    for (var i = 0; i < li.length; i++) {
      li[i].onclick = function () {
        alert(i); // 结果总是3.而不是0，1，2
      };
    }
  </script>
</body>
```

为什么 alert 总是 3？因为 i 是贯穿整个作用域的，而不是给每一个 li 分配一个 i,点击事件使异步，用户一定是在 for 运行完了以后，才点击，此时 i 已经变成 3 了。

那么怎么解决这个问题呢，**可以用立即执行函数，给每个 li 创建一个独立的作用域**，在立即执行函数执行的时候，i 的值从 0 到 2，对应三个立即执行函数，这 3 个立即执行函数里边的 j 分别是 0，1，2 所以就能正常输出了

```html
<body>
  <ul id="list">
    <li>公司简介</li>
    <li>联系我们</li>
    <li>营销网络</li>
  </ul>
  <script>
    var list = document.getElementById("list");
    var li = list.children;
    for (var i = 0; i < li.length; i++) {
      (function (j) {
        li[j].onclick = function () {
          alert(j);
        };
      })(i); // 把实参i赋值给形参j;
    }
  </script>
</body>
```

也可以使用 ES6 的块级作用域解决整个问题

```html
<body>
  <ul id="list">
    <li>公司简介</li>
    <li>联系我们</li>
    <li>营销网络</li>
  </ul>
  <script>
    var list = document.getElementById("list");
    var li = list.children;
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = function () {
        alert(i); // 结果是0，1，2
      };
    }
  </script>
</body>
```

## 总结

立即执行函数主要作用：

- 改变变量的作用域（创建一个独立的作用域）；
- 封装临时变量，避免全局变量的污染；
