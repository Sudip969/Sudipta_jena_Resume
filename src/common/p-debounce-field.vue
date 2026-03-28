<template>
  <v-text-field
    :model-value="localValue"
    @update:model-value="handleInput"
    v-bind="filteredAttrs"
  ></v-text-field>
</template>

<script>
export default {
  name: "PDebounceField",
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: "" },
    delay: { type: Number, default: 500 },
  },
  data() {
    return {
      localValue: this.modelValue,
      timeout: null,
    };
  },
  computed: {
    filteredAttrs() {
      // In Vue 3, $attrs includes event listeners like 'onUpdate:modelValue'.
      // If we blindly v-bind="$attrs" to v-text-field, we accidentally pass the
      // parent's instant-fire event listener straight through to the native component,
      // completely destroying our debounce timer! We must filter it out.
      const attrs = { ...this.$attrs };
      delete attrs["onUpdate:modelValue"];
      return attrs;
    },
  },
  methods: {
    handleInput(val) {
      this.localValue = val;

      if (this.timeout) clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.$emit("update:modelValue", val);
      }, this.delay);
    },
  },
  watch: {
    modelValue(val) {
      if (val !== this.localValue) {
        this.localValue = val;
      }
    },
  },
};
</script>
