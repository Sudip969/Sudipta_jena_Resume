<template>
  <v-row>
    <v-col cols="1"> </v-col>
    <v-col offset="3">
      <v-card class="rounded-bs-xl" variant="tonal">
        <p-tabs v-model="activeTab" :tabs="tabs">
          <template #afterTabs>
            <v-icon
              size="small"
              :icon="themeIcon"
              @click="toggleTheme"
              :color="themeColor"
              class="ma-4"
            />
          </template>
        </p-tabs>
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
      <experience-page v-if="activeTab === 1" />
      <project-page v-if="activeTab === 2" />
    </v-card>
  </v-container>
</template>
<script>
import PTabs from "../common/p-tabs.vue";
import AboutPage from "./about-page.vue";
import ExperiencePage from "./experience-page.vue";
import ProjectPage from "./project-page.vue";
import { useTheme } from "vuetify";

export default {
  components: {
    PTabs,
    AboutPage,
    ExperiencePage,
    ProjectPage,
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
        { title: "Projects" },
      ],
      theme: useTheme(),
    };
  },
  computed: {
    themeColor() {
      return this.theme.global.name === "dark" ? "white" : "orange";
    },
    themeIcon() {
      return this.theme.global.name === "dark" ? "moon_stars--filled" : "sunny";
    },
  },
  methods: {
    toggleTheme() {
      this.theme.change(this.theme.global.name === "dark" ? "light" : "dark");
    },
  },
};
</script>
<style scoped>
::v-deep(.v-tab__slider) {
  height: 0px !important;
}
</style>
