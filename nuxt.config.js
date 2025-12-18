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
    head: {
      link: [
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
