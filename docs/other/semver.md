# Semver 语义化版本工具

Semver 是一个专门分析 Semantic Version（语义化版本）的工具。semver 其实就是这两个单词的缩写。Npm 使用了该工具来处理版本相关的工作。

semver 可以作为一个 node 模块，同时也可以作为一个命令行工具。功能包括：

- 比较两个版本号的大小；
- 验证某个版本号是否合法；
- 提取版本号，例如从“=v1.2.1”体取出"1.2.1"；
- 分析版本号是否属于某个范围或符合一系列条件；

## 安装

```shell
npm install semver

# 若希望用作命令行工具
npm install -g semver
```

## 使用

- 计较两个版本号的大小

```js
semver.gt("1.2.3", "2.3.4"); // false
semver.lt("1.2.3", "2.3.4"); // true
```

- 验证版本号是否合法，返回 null 即不合法

```js
semver.valid("1.2.3"); // '1.2.3'
semver.valid("a.b.c"); // null
```

- 提取版本号

```js
semver.clean("  =v1.2.3   "); // '1.2.3'
semver.major("1.2.3"); // '1'
semver.minor("1.2.3"); // '2'
semver.patch("1.2.3"); // '3'
```
