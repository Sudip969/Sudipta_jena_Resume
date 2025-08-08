<template>
  <v-row no-gutters>
    <v-col>
      <v-tabs :model-value="modelValue" v-bind="$attrs">
        <v-tab v-for="(tab, index) in tabs" :key="index" :value="index">
          <span class="text-capitalize">
            {{ tab.title }}
          </span>
        </v-tab>
      </v-tabs>
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
  background-color: orange !important; /* Change to your color */
}
</style>
