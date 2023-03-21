# babel

## polyfill

:::waring 注意
As of Babel 7.4.0, this package has been deprecated in favor of directly including core-js/stable (to polyfill ECMAScript features):
:::

自 Babel 7.4.0 之后，`@babel/polyfill` 模块包括 `core-js` 和一个自定义 `regenerator runtime`，用于模拟完整的 ES2015+ 环境。

- 安装依赖

```shell
npm install regenerator-runtime
npm install core-js
```

- 入口引入

babel 配置：

`"useBuiltIns": "entry"`

引入依赖

```js
import "core-js";
import "regenerator-runtime";
```

这种模式下，babel 会将所有的 polyfill 全部引入，这样会导致结果的包大小非常大

- 按需引入

无需手动引入，babel 配置：

`"useBuiltIns": "usage"`

示例：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

打包结果：

```js
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/stable");

function baz() {
  console.log(Array.from(arguments));
}
baz();
```

但是两种模式都存在问题：全局污染和代码重复

- `@babel/plugin-transform-runtime` 插件

安装依赖：

`npm install --save-dev @babel/plugin-transform-runtime`

配置插件：

```js
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);
var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);
var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);
```

这个插件就是为了解决全局污染和代码重复问题。
