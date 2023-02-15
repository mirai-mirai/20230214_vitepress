export default {
 title: '画像解析PoC',
 // description: 'タクミアイズツール集',
 themeConfig: {
  siteTitle: 'ツール集',
  sidebar: [
   {
    text: '画像解析',
    items: [
     { text: '画像切り出し', link: '/item-a' },
     { text: '学習(TeachableMachine)', link: 'https://teachablemachine.withgoogle.com/train/tiny_image' },
     { text: '推論', link: '/item-b' },
    ]
   },
   {
    text: '映像再生',
    items: [
     { text: 'Item C', link: '/item-c' },
    ]
   }
  ],
  nav: [
   // { text: '画像切り抜き', link: '/imageTrimmer' },
   // {
   //  text: 'Dropdown Menu',
   //  items: [
   //   { text: 'Item A', link: '/item-1' },
   //  ]
   // }
  ],
 },
 srcDir: '../src',
 outDir: '../docs',
 lastUpdated: true,
}