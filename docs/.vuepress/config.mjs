import { containerPlugin } from '@vuepress/plugin-container'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  lang: 'en-US',
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',

  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    logo: '/images/logo.svg',
    navbar: [

    ],
    sidebar: [
      {
        text: 'Introduction',
        children: [
          '/about-this-course/README.md',
        ]
      },
      {
        text: 'Developer tools',
        children: [
           '/00-visual-studio-community/README.md',
           '/00-visual-code/README.md',
           '/00-git/README.md',           
        ]
      },
      {
        text: 'Version control fundamentals',
        children: [
          '/30-version-control-fundamentals/README.md',
          '/31-github-teamwork/README.md',
        ]
      },
      {
        text: 'Introduction to Programming',
        children: [
          '/01-introduction-to-computer-programming/README.md',
          '/02-basic-building-blocks/README.md',
          '/03-starting-in-csharp/README.md',
          '/04-storing-data/README.md',
          '/05-processing-data/README.md',
          '/06-getting-user-data/README.md',
          '/07-methods/README.md',
          '/08-making-decisions/README.md',
          '/09-loops/README.md',
          '/10-strings/README.md',
          '/11-arrays/README.md',
        ]
      },
      {
        text: 'Object Oriented Thinking',
        children: [
          '/21-abstraction/README.md',
          '/22-all-about-objects/README.md',
        ]
      },
      {
        text: 'Object Oriented Programming',
        children: [
          '/24-defining-custom-classes/README.md',
          '/25-getters-setters-properties/README.md',
          '/26-constructors/README.md',
          '/27-composition/README.md',
          '/28-interfaces/README.md',
          '/29-inheritance/README.md',
        ]
      },
      {
        text: 'Advanced Topics',
        children: [
          '/41-handling-exceptions/README.md',
          '/42-creating-libraries/README.md',
          '/43-unit-testing/README.md',          
        ]
      },
      {
        text: 'WPF',
        children: [
          '/50-introduction-to-wpf/README.md',
        ]
      },
      {
        text: 'Tutorials',
        children: [
          '/60-tutorials/terminal-selection-menu/README.md',
        ]
      },
    ],
    sidebarDepth: 0,    
    smoothScroll: true
  }),
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  bundler: viteBundler()
}