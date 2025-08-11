// plugins/vuetify.client.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '../src/style/main.scss';
// import '@/styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure your project is capable of handling css files




import { aliases } from 'vuetify/iconsets/md'
import { materialSymbols } from './helpers/materialsSymbols';


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            surface: '#FFFFFF',
            secondary: '#00338d',
            accent: '#76d2ff',
            lightThemeText: '#ffffff',
            background: '#F5F6FA',

            primary: '#1E49E2',
            'on-primary': '#FFFFFF',
            'primary-hover': '#00338D',
            'primary-border': '#C9D3F8',

            error: '#ED2124',
            'error-hover': '#CE0017',
            purple: '#7213EA',

            success: '#269924',
            info: '#00B8F5',
            // success: '#6ac4a1',
            warning: '#EEB82A',
          },
        },
        dark: {
          dark: true,
          colors: {
            surface: '#1E1E1E',
            secondary: '#76d2ff',          // softened to contrast with dark bg
            accent: '#00338D',             // swap accent/secondary for better visibility
            lightThemeText: '#121212',     // renamed as 'darkThemeText' if needed

            background: '#121212',

            primary: '#FFA726',
            'on-primary': '#000000',
            'primary-hover': '#5472F5',    // lighter than hover color in light mode
            'primary-border': '#3F51B5',

            error: '#FF6E6E',
            'error-hover': '#FF4C4C',
            purple: '#BB86FC',

            success: '#81C784',
            info: '#80D8FF',
            warning: '#FFD54F',

            yellow: '#FFEB3B',
          },

        },
      },
    },
    // icons: {
    //   defaultSet: 'md',
    //   aliases,
    //   sets: {
    //     md,
    //   },
    // },
    icons: {
      defaultSet: 'ms',
      aliases: { ...aliases, checkboxOn: aliases.checkboxOn + '--filled' },
      sets: {
        ms: materialSymbols
      }
    },
    styles: { configFile: '/src/styles/variables.scss' }

  })

  nuxtApp.vueApp.use(vuetify)

  // Provide a reactive toggleTheme function
  const toggleTheme = () => {
    const current = vuetify.theme.global.name.value
    vuetify.theme.change(current === 'light' ? 'dark' : 'light')
  }

  nuxtApp.provide('toggleTheme', toggleTheme)

  // Optional: auto-detect system theme
  if (import.meta.client) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    vuetify.theme.change(prefersDark ? 'dark' : 'light')
  }
})
