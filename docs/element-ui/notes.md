# ElementUI

## tab 标签

### v-model 非真数据时，默认是 '0'

源码 `tabs/src/tabs.vue`：

```js
created() {
  if (!this.currentName) {
    this.setCurrentName('0');
  }

  this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true));
},
```
