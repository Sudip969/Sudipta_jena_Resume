<template>
  <v-row no-gutters align="center">
    <!-- Tabs -->
    <v-col cols="8" sm="10" class="d-flex">
      <v-tabs :model-value="modelValue" show-arrows v-bind="$attrs">
        <v-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :value="index"
          v-bind="tab.to ? { to: tab.to } : {}"
        >
          <span class="text-capitalize">
            {{ tab.title }}
          </span>
        </v-tab>
      </v-tabs>
    </v-col>

    <!-- Icon -->
    <v-col cols="1" sm="2" class="d-flex justify-end">
      <slot name="afterTabs" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    modelValue: Number,
    tabs: { type: Array, default: () => null },
  },
};
</script>
<style scoped>
/* This will change slider color only for selected tab */
.v-tab--selected :deep(.v-tab__slider) {
  background-color: primary !important; /* Change to your color */
}
</style>
