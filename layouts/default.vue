<template>
  <v-main>
    <p-toolbar />
    <slot />
  </v-main>
</template>

<script>
import PToolbar from "~/src/app/p-toolbar.vue";
export default {
  components: { PToolbar },
};
</script>
