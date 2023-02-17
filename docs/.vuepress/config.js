const sidebar = require('./sidebar')
const nav = require('./nav')

module.exports = {
  title: 'YAF-生命不息、学习不止。',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
      }
    ],
    [
      'link',
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
      }
    ],
  ],
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
  },
  extendMarkdown(md) {
    md.set({ html: true });
    md.use(require("markdown-it-katex"));
  },
}