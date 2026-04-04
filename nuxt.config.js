// nuxt.config.ts
import { resolve } from 'path';

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  alias: {
    src: "/<rootDir>/src",
    // '/src': resolve(__dirname, 'src'),
    '/components': resolve(__dirname, '/src/components'),
    '/assets': resolve(__dirname, 'assets'),
    '/plugins': resolve(__dirname, 'plugins')
  },
  ssr: false, // or false depending on your use case
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    baseURL: '/Sudipta_jena_Resume/',
    buildAssetsDir: 'nuxt',
    head: {
      title: 'Sudipta Jena | Full Stack Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Sudipta Jena, a passionate Full Stack Developer specializing in modern web technologies.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ]
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      },
    },
    plugins: [vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss', // 👈 this must be a relative path
      },
    })],
  },
  nitro: {
    preset: 'github-pages',
    routeRules: {
      '/weather/**': {
        proxy: 'http://localhost:5050/weather/**',
        secure: false,
        changeOrigin: true
      },
      compressPublicAssets: true
    }
  }
});
