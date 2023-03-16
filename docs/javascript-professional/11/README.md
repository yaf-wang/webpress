# 第十一章 期约与异步函数

本章内容：

- 异步编程
- 期约
- 异步函数

ES6 新增 Promise 引用类型，以及 ES7 增加的 async 和 await 关键字解决异步编程的问题。

- `Promise.all()`

  所有 Promise 成功后返回数组，任意一个失败则直接抛出失败

- `Promise.race()`

  一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

- `Promise.any()`

  任意一个 promise 变成了兑现状态，那么由该方法所返回的 promise 就会变成兑现状态
