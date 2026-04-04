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
          class="px-2 px-sm-4"
        >
          <div class="d-flex align-center Ga-2">
            <v-icon v-if="tab.icon" :icon="tab.icon" size="small" class="mr-1 mr-sm-2" />
            <span class="text-capitalize font-weight-medium">
              {{ tab.title }}
            </span>
          </div>
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
