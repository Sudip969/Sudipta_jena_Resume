<template><weather-app /></template>
<script>
definePageMeta({
  layout: "weather-app",
});
import WeatherApp from "/src/components/weather-app/weather-app.vue";
export default {
  components: {
    WeatherApp,
  },
};
</script>
