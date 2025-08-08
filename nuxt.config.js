// nuxt.config.ts
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  // alias: {
  //   '@test': resolve(__dirname, 'unitTestUtils'),
  //   '/src': resolve(__dirname, 'src'),
  //   '/components': resolve(__dirname, 'src/common/components'),
  //   '/assets': resolve(__dirname, 'assets'),
  //   '/plugins': resolve(__dirname, 'plugins')
  // },
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
    // define: {
    //   'process.env.DEBUG': false,
    // },
    vue: {
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    },
    plugins: [vuetify({
      autoImport: true,
      // styles: {
      //   configFile: 'styles/settings.scss', // 👈 this must be a relative path
      // },
    })],
  },
});
