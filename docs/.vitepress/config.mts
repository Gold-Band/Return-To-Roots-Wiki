import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Return To Roots Wiki",
  description: "The official wiki for Return To Roots",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Wiki', link: '/wiki/' },
      { text: 'GDD', link: '/gdd/' }
    ],

    sidebar: {
      '/wiki/': { base: '', items: wikiSidebar() },
      '/gdd/': { base: '', items: gddSidebar() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gold-Band/Return-To-Roots-Wiki' }
    ]
  }
})

function wikiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Home',
      items: [
        {text: 'Introduction', link: '/wiki/'},
      ]
    },
    {
      text: 'Lore',
      items: [
        {text: 'Backstory', link: '/wiki/backstory'},
        {text: 'Potheads', link: '/wiki/potheads'}
      ]
    },
  ]
}

function gddSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Game Design Document',
      items: [
        {text: 'Introduction', link: '/gdd/'},
      ]
    }
  ]
}