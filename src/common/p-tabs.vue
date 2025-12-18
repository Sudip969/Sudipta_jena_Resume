<template>
  <v-row no-gutters>
    <v-col class="d-flex">
      <v-tabs :model-value="modelValue" v-bind="$attrs">
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
    <div>
      <slot name="afterTabs" />
    </div>
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
