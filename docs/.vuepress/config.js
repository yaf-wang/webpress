const projectSidebar = require('../project/sidebar')
const nav = require('./nav')
const JSProSidebar = require('../javascript/professional/sidebar')

const computerSidebar = [
  '/computer/verdaccio',
  {
    title: 'Linux基础操作',   // 必要的
    path: '/computer/linux',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/computer/linux/',
      '/computer/linux/file',
      '/computer/linux/user',
      '/computer/linux/permissions',
      '/computer/linux/vim',
      '/computer/linux/system',
      '/computer/linux/other',
    ],
  },
  {
    title: 'Redis',
    path: '/computer/redis/0001',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      '/computer/redis/0001',
    ],
  },
  {
    title: 'Web通信',   // 必要的
    path: '/computer/protocol',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/computer/protocol/',
      '/computer/protocol/polling',
      '/computer/protocol/https',
    ],
  },
  ['character', '字符集'],

]

const jsSidebar = [
  '',
  {
    title: 'JavaScript 那些事儿',
    path: '/javascript/0001/01',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      '/javascript/0001/dom-size',
      '/javascript/0001/iife',
      '/javascript/0001/01',
      '/javascript/0001/02',
      '/javascript/0001/03',
      '/javascript/0001/async-defer',
      '/javascript/0001/storage',
    ],
  },
  JSProSidebar
]

const cssSidebar = [
  '',
  '/csses/display-block-inline',
  {
    title: 'border-radius',
    path: '/csses/border-radius'
  }
]

const vueSidebar = [
  {
    title: 'VUE 项目笔记',
    path: '/vue/notes/0001',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      '/vue/notes/0001.md',
      '/vue/notes/interviewer.md',
    ],
  },
]

const oSidebar = [
  {
    title: 'Semver 语义化版本工具',
    path: '/other/semver',
    collapsable: false,
  },
]


module.exports = {
  title: 'YAF-生命不息、学习不止。',
  markdown: {
    lineNumbers: true
  },
  extraWatchFiles: [ // 指定额外的需要被监听的文件
    '.vuepress/nav.js',

    // TODO 优化为动态获取规则
    '../javascript/professional/sidebar.js'
  ],
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    nav,
    sidebar: {
      '/computer/': computerSidebar,
      '/javascript/': jsSidebar,
      '/csses/': cssSidebar,
      '/project/': projectSidebar,
      '/vue/': vueSidebar,
      '/other/': oSidebar
    }
  }
}