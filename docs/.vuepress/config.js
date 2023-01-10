const projectSidebar = require('../project/sidebar')

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
    ],
  },
  {
    title: 'JavaScript 高级程序设计-第四版',
    path: '/javascript/1',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/javascript/1/',
      '/javascript/1/04',
      '/javascript/1/05',
      '/javascript/1/06',
      '/javascript/1/08',
    ],
  }
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
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'CSS', link: '/csses/' },
      { text: 'VUE', link: '/vue/notes/0001' },
      { text: '实战项目', link: '/project/sgg-vue' },
      { text: '运维', link: '/computer/verdaccio' },
      { text: '其他', link: '/other/semver' },
    ],
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