const projectSidebar = require('../project/sidebar')

const computerSidebar = [
  '/computer/verdaccio',

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

// const vueSidebar = [
//   {
//     title: 'VUE 项目笔记',
//     path: '/vue/notes/0001',
//     collapsable: false,
//     sidebarDepth: 1,
//     children: [
//       '/vue/notes/0001.md',
//       '/vue/notes/interviewer.md',
//     ],
//   },
// ]

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
        {
          title: '第十一章 期约与异步函数',
          path: '/javascript-professional/11/',
          sidebarDepth: 1,
          children: [
            '/javascript-professional/11/01',
            '/javascript-professional/11/02',
            '/javascript-professional/11/03',
          ]
        },
        {
          title: '第十二章 BOM',
          path: '/javascript-professional/12/',
          sidebarDepth: 1,
          children: [
            '/javascript-professional/12/01',
            '/javascript-professional/12/02',
            '/javascript-professional/12/03',
          ]
        },
        {
          title: '第十三章 客户端检测',
          path: '/javascript-professional/13/',
          sidebarDepth: 1,
          children: [
            '/javascript-professional/13/01',
            '/javascript-professional/13/02',
            '/javascript-professional/13/03',
            '/javascript-professional/13/04',
          ]
        },
        {
          title: '第十四章 DOM',
          path: '/javascript-professional/14/',
          sidebarDepth: 1,
          children: [
            '/javascript-professional/14/01',
          ]
        }
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
        '/javascript-technic/data-type-test',
        '/javascript-technic/03',
        '/javascript-technic/iife',
        '/javascript-technic/currying',
        '/javascript-technic/void',
        '/javascript-technic/dom-size',
        '/javascript-technic/04',
        '/javascript-technic/async-defer',
        '/javascript-technic/storage',
      ],
    }
  ],
  '/algorithm/': [
    {
      title: '算法',
      path: '/algorithm/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/algorithm/fibonacci',
      ],
    }
  ],
  '/csses/': cssSidebar,
  '/project/': projectSidebar,
  '/vuejs-design-implement/': [
    {
      title: 'VueJS 设计与实现',
      path: '/vuejs-design-implement/',
      collapsable: false,
      sidebarDepth: 1,
      children: [

      ],
    }
  ],
  '/vue/notes/': [
    {
      title: 'VueJS 笔记',
      path: '/vue/notes/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/vue/notes/0001',
        '/vue/notes/0002',
        '/vue/notes/event-target',
        '/vue/notes/interviewer',
      ],
    }
  ],
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
  '/nginx/': [
    {
      title: 'Nginx 实战教程',
      path: '/nginx/tutorial',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/nginx/tutorial/01',
        '/nginx/tutorial/todos',
      ],
    },
    {
      title: 'Nginx 面试官',
      path: '/nginx/interview',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/nginx/01',
      ],
    }
  ],
  '/linux/': [
    {
      title: 'Linux 基础操作',   // 必要的
      path: '/linux/tutorial/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/linux/tutorial/01',
        '/linux/tutorial/file',
        '/linux/tutorial/user',
        '/linux/tutorial/permissions',
        '/linux/tutorial/vim',
        '/linux/tutorial/system',
        '/linux/tutorial/other',
      ],
    },
    {
      title: 'Linux 常用操作',
      path: '/linux/notes/',
    },
  ],
  '/network/': [
    '',
    {
      title: 'DNS 原理',
      path: '/network/dns/',
    },
  ]
}