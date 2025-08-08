<template>
  <v-container>
    <v-row class="">
      <v-col cols="4">
        <v-card class="rounded-shaped"> <personal-details /></v-card>
      </v-col>
      <v-col cols="8">
        <v-card> <professional-details /></v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-toolbar
    class="text-white"
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-avatar class="ml-2 text-white">
      <v-icon icon="account_circle" />
    </v-avatar>
    <v-toolbar-title
      text="Sudipta Jena | Software Development Engineer"
    ></v-toolbar-title>
    <v-toolbar-items class="mr-2">
      <p-toolbar-item icon-name="info" title="About">About</p-toolbar-item>
      <p-toolbar-item icon-name="work_history" title="Work"
        >Work</p-toolbar-item
      >
      <p-toolbar-item icon-name="contacts" title="Contact"
        >Contact</p-toolbar-item
      >
      <p-toolbar-item icon-name="assignment" title="Resume">
        Resume</p-toolbar-item
      >
      <v-icon
        class="mt-5"
        size="small"
        :icon="themeIcon"
        :color="themeColor"
        @click="toggleTheme"
      />
    </v-toolbar-items>
  </v-toolbar> -->
</template>
<script>
import PToolbarItem from "./p-toolbar-item.vue";
import { useTheme } from "vuetify";
import PersonalDetails from "../components/personal-details.vue";
import ProfessionalDetails from "../components/professional-details.vue";

export default {
  name: "p-toolbar",
  components: {
    PToolbarItem,
    PersonalDetails,
    ProfessionalDetails,
  },
  data() {
    return {
      theme: useTheme(),
    };
  },
  computed: {
    themeColor() {
      return this.theme.global.name === "dark" ? "yellow" : "black";
    },
    themeIcon() {
      return this.theme.global.name === "dark" ? "sunny" : "moon_stars";
    },
  },
  methods: {
    toggleTheme() {
      this.theme.change(this.theme.global.name === "dark" ? "light" : "dark");
    },
  },
};
</script>
