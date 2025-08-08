<template>
  <v-row>
    <v-col offset="4">
      <v-card class="rounded-bs-xl" variant="tonal">
        <p-tabs v-model="activeTab" :tabs="tabs" />
      </v-card>
    </v-col>
  </v-row>
  <v-container>
    <v-card variant="flat" rounded="0">
      <v-card-title class="font-weight-bold text-h5 pl-0">
        {{ tabs[activeTab].title }}
      </v-card-title>
      <v-divider thickness="3px" length="36px" color="orange" opacity="1" />
      <about v-if="activeTab === 0" />
      <resume v-if="activeTab === 1" />
    </v-card>
  </v-container>
</template>
<script>
import PTabs from "../common/p-tabs.vue";
import About from "./about.vue";
import Resume from "./resume.vue";
export default {
  components: {
    PTabs,
    About,
    Resume,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "About",
        },
        {
          title: "Resume",
        },
      ],
    };
  },
  methods: {
    toggleTab(tab) {
      this.activeTab;
      console.log(tab);
    },
  },
};
</script>
<style scoped>
::v-deep(.v-tab__slider) {
  height: 0px !important; /* or your custom size */
}
</style>
