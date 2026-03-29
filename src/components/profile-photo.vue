<template>
  <v-avatar size="150" class="border-sm" color="primary">
    <v-img :src="`${config.app.baseURL}images/Dp.jpg`" cover />
  </v-avatar>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
