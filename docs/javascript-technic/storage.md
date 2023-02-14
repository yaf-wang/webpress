# Cookie、Storage API 区别

## cookie

- 可以手动设置过期时间，超过有效期则失效。未设置过期时间，关闭浏览器窗口会被清除。
- 存放数据大小一般为 4K。
- 每次请求都会被传送到服务器。

### cookie 过期时间：

设定的过期时间只与客户端相关，而不是服务器端。

`Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;`

### 定义 Cookie 发送位置

- Domain 属性：指定了哪些主机可以接受 Cookie。
- Path 属性：属性指定了一个 URL 路径。
- SameSite 属性：允许服务器指定是否/何时通过跨站点请求发送。

## localStorage

- 需要主动删除数据信息，否则将会永远存在，关闭浏览器窗口不会被清除，下次启动仍然存在。
- localStorage 中的键值对总是以字符串的形式存储（意味着数字自动转化为字符串类型），
- 存放数据大小一般为 5MB。
- 不与服务器进行交互通信。

:::tip 提示
localStorage 中存储的数据，在同域下多窗口间会出现串数据问题。
:::

## sessionStorage

- 仅在当前会话下有效，重新加载或恢复页面仍会保持原来的页面会话，关闭浏览器窗口会被清除。
- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage。
- 被存储的键值对总是以 UTF-16 DOMString 的格式所存储，其使用两个字节来表示一个字符。对于对象、整数 key 值会自动转换成字符串形式。
- 存在数据大小一般为 5MB。
- 不与服务器进行交互通信。

### sessionStorage 多窗口之间可以共享状态吗？

如果从**本页面以新开页签的方式**打开一个**同域下的新页面**，新开的页面会和之前的页面 **‘共享’** sessionStorage。

- 在页面 A 中设置一个值

```javascript
window.sessionStorage.setItem("pageA_1", "123");
```

- A 页面 button 按钮，点击按钮触发 window.open("同源页面")，现得到新开的页面 B，在 B 中执行

```javascript
window.sessionStorage.getItem("pageA_1"); // 123
```

到目前可以看出 sessionStorage 是可以共享的。如果真的能共享数据，那 sessionStorage 不是也会出现串数据的情况吗，但是平时并不会。

在页面 A 中继续执行

```javascript
window.sessionStorage.setItem("pageA_1", "456"); // 原值 123
window.sessionStorage.setItem("pageA_2", "789");
```

在页面 B 中再次尝试获取

```javascript
window.sessionStorage.getItem("pageA_1"); //拿到的结果还是 "123" !!!
window.sessionStorage.getItem("pageA_2"); //拿到的结果是 null !!!
```

MDN 的说法：**在该标签或窗口打开一个新页面时会复制顶级浏览会话的上下文作为新会话的上下文.**

原来只有在本页面中以新页签或窗口打开的同源页面会‘临时共享’之前页面的 sessionStorage。

而且共享这个词似乎也并不怎么准确，准确来说应该叫**复制**更加准确！

:::tip 总结
多窗口之间 sessionStorage**不可以共享状态**，但是在某些特定场景下新开的页面会**复制之前页面的 sessionStorage！**
:::

参照文章：[面试官：你确定多窗口之间 sessionStorage 不能共享状态吗？？？](https://juejin.cn/post/7076767687828832286)

#### 通过 StorageEvent 响应存储的变化

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = e.storageArea;
});
```

#### 检测 localStorage 是否同时受支持和可用的函数：

```js
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
```

## 多个标签页之间通信方式

### Cookie + 定时器

Cookie 是浏览器端的存储容器，而且它是多页面共享的，利用这个特性可以实现多个标签页的通信；

缺点：

- cookie 大小限制，每一个浏览器在每个域名下最多能设置 30 ～ 50 个 cookie，容量在 4kb 左右；
- 定时器的使用，会影响浏览器的性能，
- Cookie 会被携带发送服务器，影响带宽；

### localStorage 方式

localStorage 比 cookie 好在它在 setItem 存东西时会自动触发整个浏览器的 storage 事件，

缺点：

- localStorage 是 h5 的属性，需要高版本浏览器（目前可以忽略低版本浏览器）；
- localStorage 只能监听非己页面的数据变化；

优点：

- 解决了 cookie 容量小和时效性的问题。

### webSocket 方式

缺点：

- 它需要服务端的支持才能完成任务。如果 socket 数据量比较大的话，会严重消耗服务器的资源
- 必须要在服务端项目中写服务端监听程序才能支持

优点：

- 使用简单（客户端简单，服务端苦逼了），功能灵活、强大，如果部署了 WebSocket 服务器，可以实现很多实时的功能

### SharedWorker 方式
