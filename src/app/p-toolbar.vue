<template>
  <v-card> <professional-details /></v-card>
</template>
<script>
import { useTheme } from "vuetify";
import ProfessionalDetails from "../components/professional-details.vue";

export default {
  name: "p-toolbar",
  components: {
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
