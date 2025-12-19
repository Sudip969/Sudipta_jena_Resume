<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="rounded-shaped"> <personal-details /></v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-row>
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
            <v-card-title class="font-weight-bold text-h5 pl-0 text-capitalize">
              {{ route.name }}
            </v-card-title>
            <v-divider
              thickness="3px"
              length="36px"
              color="primary"
              opacity="1"
            />
            <slot />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PTabs from "/src/common/p-tabs.vue";
import PersonalDetails from "/src/components/personal-details.vue";
import { useTheme } from "vuetify";
import { useRoute } from "vue-router";

export default {
  name: "default",
  components: {
    PTabs,
    PersonalDetails,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "About",
          to: "/about",
        },
        {
          title: "Experience",
          to: "/experience",
        },
        { title: "Projects", to: "/projects" },
        { title: "Awards", to: "/awards" },
      ],
      theme: useTheme(),
      route: useRoute(),
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
