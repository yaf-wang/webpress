const sidebar = require('./sidebar')
const nav = require('./nav')

module.exports = {
  title: 'YAF-生命不息、学习不止。',
  markdown: {
    lineNumbers: true
  },
  extraWatchFiles: [ // 指定额外的需要被监听的文件
    '.vuepress/nav.js',
    '.vuepress/sidebar.js',
  ],
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    nav,
    sidebar
  }
}