<template>
  <v-container class="pa-6">
    <v-card class="pa-4 mx-auto" max-width="400" elevation="4">
      <p-search-field v-model="address" @update:model-value="search">
      </p-search-field>
      <!-- <v-text-field v-model="address"> </v-text-field>
      <v-btn @click="search"> Search </v-btn> -->
      <v-card-title class="text-h5">
        Weather in {{ weather?.name }}
      </v-card-title>
      {{ console.log(weather) }}

      <v-card-subtitle class="mb-2">
        {{ weather?.weather[0].description }}
      </v-card-subtitle>

      <v-row align="center" justify="space-between">
        <!-- Weather Icon -->
        <v-col cols="4" class="d-flex justify-center">
          <v-img
            v-if="weather"
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            max-width="80"
          />
        </v-col>

        <!-- Temperature -->
        <v-col cols="8">
          <div class="text-h4 font-weight-bold">
            {{ weather ? (weather.main.temp - 273.15).toFixed(1) : "---" }}°C
          </div>
          <div>
            Feels like:
            {{
              weather ? (weather.main.feels_like - 273.15).toFixed(1) : "---"
            }}°C
          </div>
        </v-col>
      </v-row>

      <!-- Extra Info -->
      <v-divider class="my-2"></v-divider>
      <v-row>
        <v-col cols="6">
          🌬 Wind: {{ weather ? weather.wind.speed : "--" }} m/s
        </v-col>
        <v-col cols="6">
          💧 Humidity: {{ weather ? weather.main.humidity : "--" }}%
        </v-col>
        <v-col cols="6">
          ⬇ Min:
          {{ weather ? (weather.main.temp_min - 273.15).toFixed(1) : "--" }}°C
        </v-col>
        <v-col cols="6">
          ⬆ Max:
          {{ weather ? (weather.main.temp_max - 273.15).toFixed(1) : "--" }}°C
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import PSearchField from "~/src/common/p-search-field.vue";
export default {
  components: {
    PSearchField,
  },
  data() {
    return {
      address: "",
      weather: null, // will hold the API response
    };
  },
  methods: {
    async search() {
      try {
        const { data } = await axios.get("/weather/info", {
          params: { address: this.address },
        });
        this.weather = data;
      } catch (e) {
        console.error("Error fetching weather:", e);
      }
    },
  },
};
</script>
