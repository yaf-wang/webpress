# JS 函数柯里化

> 维基百科上说道：柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

## 简单例子

```js
// 普通的add函数
function add(x, y) {
  return x + y;
}

// Currying后
function curryingAdd(x) {
  return function (y) {
    return x + y;
  };
}

add(1, 2); // 3
curryingAdd(1)(2); // 3
```

## 引用场景

### 参数复用

- 正则匹配

```js
// 函数封装后
function check(reg, txt) {
  return reg.test(txt);
}

check(/\d+/g, "test"); //false
check(/[a-z]+/g, "test"); //true

// Currying后
function curryingCheck(reg) {
  return function (txt) {
    return reg.test(txt);
  };
}

var hasNumber = curryingCheck(/\d+/g);
var hasLetter = curryingCheck(/[a-z]+/g);

hasNumber("test1"); // true
hasNumber("testtest"); // false
hasLetter("21212"); // false
```

上面的示例是一个正则的校验，正常来说直接调用 check 函数就可以了，但是如果有很多地方都要校验是否有数字，其实就是需要将第一个参数 reg 进行复用，这样别的地方就能够直接调用 hasNumber，hasLetter 等函数，让参数能够复用，调用起来也更方便。

- 提前确认

```js
var on = function (element, event, handler) {
  if (document.addEventListener) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  } else {
    if (element && event && handler) {
      element.attachEvent("on" + event, handler);
    }
  }
};

var on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();

//换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
var on = function (isSupport, element, event, handler) {
  isSupport = isSupport || document.addEventListener;
  if (isSupport) {
    return element.addEventListener(event, handler, false);
  } else {
    return element.attachEvent("on" + event, handler);
  }
};
```

- 延迟运行

```js
Function.prototype.bind = function (context) {
  var _this = this;
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    return _this.apply(context, args);
  };
};
```

像我们 js 中经常使用的 bind，实现的机制就是 Currying。

## 性能问题

- 存取 arguments 对象通常要比存取命名参数要慢一点；
- 一些老版本的浏览器在 `arguments.length` 的实现上是相当慢的;
- 使用 `fn.apply( … )` 和 `fn.call( … )` 通常比直接调用 `fn( … )` 稍微慢点；
- 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上；

其实在大部分应用中，主要的性能瓶颈是在操作 DOM 节点上，这 js 的性能损耗基本是可以忽略不计的，所以 curry 是可以直接放心的使用。

## 经典面试题

```js
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
```

- 实现数组排序

```js
function createComparsionFunction(prototypeName) {
  return function (prev, next) {
    let value1 = prev[prototypeName];
    let value2 = next[prototypeName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

let data = [
  { name: "Zachary", age: 28 },
  { name: "Nicholas", age: 26 },
  { name: "Jack", age: 30 },
];
data.sort(createComparsionFunction("age"));
```

参考文章：

- [详解 JS 函数柯里化](https://www.jianshu.com/p/2975c25e4d71)
- [理解运用 JS 的闭包、高阶函数、柯里化](https://cloud.tencent.com/developer/article/1326958)
