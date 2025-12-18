<template>
  {{ $attrs }}
  <p-debounce-field
    v-bind="$attrs"
    prepend-icon="search"
    @update:model-value="console.log('happens')"
  />
</template>
<script>
import PDebounceField from "./p-debounce-field.vue";
export default {
  components: {
    PDebounceField,
  },
};
</script>
