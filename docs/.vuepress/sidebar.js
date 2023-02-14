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
      '/computer/protocol/https',
    ],
  },
  ['character', '字符集'],

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
  '/computer/': computerSidebar,
  // '/javascript/': jsSidebar,
  '/javascript-professional/': [
    {
      title: '红宝书-第四版',
      path: '/javascript-professional/',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '/javascript-professional/04',
        '/javascript-professional/05',
        '/javascript-professional/06',
        '/javascript-professional/08',
        '/javascript-professional/09',
        '/javascript-professional/10',
      ],
    }
  ],
  '/javascript-technic/': [
    {
      title: 'JavaScript 开发技巧',
      path: '/javascript-technic/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/javascript-technic/03',
        '/javascript-technic/dom-size',
        '/javascript-technic/iife',
        '/javascript-technic/void',
        '/javascript-technic/04',
        '/javascript-technic/async-defer',
        '/javascript-technic/storage',
      ],
    }
  ],
  '/csses/': cssSidebar,
  '/project/': projectSidebar,
  '/vue/': vueSidebar,
  '/other/': oSidebar,
  '/typescript-tutorial/': [ // TypeScript
    '',
    {
      title: '基础',
      path: '/typescript-tutorial/basics/',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '/typescript-tutorial/basics/primitive-data-types',
        '/typescript-tutorial/basics/any',
        '/typescript-tutorial/basics/type-inference',
        '/typescript-tutorial/basics/union-types',
        '/typescript-tutorial/basics/type-of-object-interface',
        '/typescript-tutorial/basics/type-of-array',
        '/typescript-tutorial/basics/type-of-function',
        '/typescript-tutorial/basics/type-assertion',
      ],
    },
    {
      title: '进阶',
      path: '/typescript-tutorial/advance/',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        '/typescript-tutorial/advance/class-and-interfaces',
        '/typescript-tutorial/advance/generics',
      ],
    },
  ],
}