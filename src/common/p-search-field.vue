<template>
  <v-autocomplete
    :model-value="modelValue"
    @update:model-value="onModelUpdate"
    :search="searchQuery"
    @update:search="onSearchUpdate"
    v-bind="filteredAttrs"
    prepend-inner-icon="search"
    variant="solo-filled"
    flat
    hide-details
    no-filter
    placeholder="Search for a city..."
  />
</template>

<script>
export default {
  name: "PSearchField",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, null],
      default: ""
    }
  },
  emits: ["update:modelValue", "update:search"],
  data() {
    return {
      searchQuery: "",
      debounceTimeout: null
    };
  },
  computed: {
    filteredAttrs() {
      const attrs = { ...this.$attrs };
      delete attrs["onUpdate:modelValue"];
      delete attrs["onUpdate:search"];
      return attrs;
    }
  },
  methods: {
    onModelUpdate(val) {
      // When user clicks a specific city, clear the dropdown search query
      this.searchQuery = ""; 
      this.$emit("update:modelValue", val);
    },
    onSearchUpdate(val) {
      this.searchQuery = val;

      // Automatically Debounce the typing to prevent API spam
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
      
      this.debounceTimeout = setTimeout(() => {
        // Only trigger search fetch if they actually typed something to avoid empty null errors
        if (val) {
          this.$emit("update:search", val);
        }
      }, 500);
    }
  }
};
</script>
