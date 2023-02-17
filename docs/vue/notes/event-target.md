# vue 获取绑定事件元素

想要获取当前点击的元素，以及父元素、子元素、兄弟元素，第一步我们需要先绑定事件

`<li class="del" @click="del($event)">删除</li>`

```js
//当前点击的元素
e.target;

//绑定事件的元素
e.currentTarget;

//获得点击元素的前一个元素
e.currentTarget.previousElementSibling.innerHTML;

//获得点击元素的第一个子元素
e.currentTarget.firstElementChild;

//获得点击元素的下一个元素
e.currentTarget.nextElementSibling;

//获得点击元素中id为string的元素
e.currentTarget.getElementById("string");

//获得点击元素的class属性
e.currentTarget.getAttributeNode("class");

// 获得点击元素的父级元素
e.currentTarget.parentElement;

// 获得点击元素的前一个元素的第一个子元素的HTML值
e.currentTarget.previousElementSibling.firstElementChild.innerHTML;
```

## currentTarget

为什么控制台打印事件对象 e 时里面的 currentTarget 为 null，而打印 e.currentTarget 时为 DOM 对象？

为什么会出现这种现象呢？
这是因为 currentTarget 只能用于事件正在处理过程中，当回调结束，会被重新赋值。
用异步可以明显看到这一现象：

currentTarget 同样是 null，因为当读取 currentTarget 属性时，事件处理已经结束了被重新赋值了
