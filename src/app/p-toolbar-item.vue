<template>
  <v-btn v-bind="$attrs" v-tooltip:bottom="title">
    <v-icon>{{ iconName }}</v-icon
    ><slot />
  </v-btn>
</template>

<script>
export default {
  name: "p-toolbar-item",
  props: {
    title: { type: String, required: true },
    iconName: { type: String },
  },
};
</script>
<style scoped></style>
