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
