<template>
  <v-text-field v-model="localValue" v-bind="$attrs"> </v-text-field>
</template>
<script>
export default {
  props: {
    modelValue: { type: String, default: "" },
    delay: { type: Number, default: 5000 },
  },
  data() {
    return {
      localValue: this.modelValue,
      timeout: null,
    };
  },

  watch: {
    localValue(val) {
      debugger;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$emit("update:model-value", val);
      }, this.delay);
    },
    modelValue(val) {
      debugger;
      if (val !== this.localValue) {
        this.localValue = val;
      }
    },
  },
};
</script>
