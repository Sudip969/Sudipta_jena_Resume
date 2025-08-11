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
      <v-divider thickness="3px" length="36px" color="primary" opacity="1" />
      <about-page v-if="activeTab === 0" />
      <resume-page v-if="activeTab === 1" />
    </v-card>
  </v-container>
</template>
<script>
import PTabs from "../common/p-tabs.vue";
import AboutPage from "./about-page.vue";
import ResumePage from "./experience-page.vue";
export default {
  components: {
    PTabs,
    AboutPage,
    ResumePage,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "About",
        },
        {
          title: "Experience",
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
