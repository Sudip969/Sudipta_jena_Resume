<template>
  <p-toolbar />
  <v-main>
    <span class="material-symbols-outlined"> add_circle </span>
    <v-btn color="primary" @click="toggleTheme">Vuetify Works!</v-btn>
    <slot />
  </v-main>
</template>

<script>
import PToolbar from "~/src/app/p-toolbar.vue";
import { useTheme } from "vuetify";
export default {
  components: { PToolbar },
  data() {
    return {
      theme: useTheme(),
    };
  },
  methods: {
    toggleTheme() {
      this.theme.change(this.theme.global.name === "dark" ? "light" : "dark");
    },
  },
};
</script>
