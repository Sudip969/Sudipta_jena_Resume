<template>
  <v-container class="pa-4 pa-sm-8" fluid>
    <v-card class="mx-auto rounded-xl weather-widget overflow-hidden" max-width="480" elevation="10">
      
      <!-- Top Search Header -->
      <div class="bg-primary px-6 pt-6 pb-4">
        <h2 class="text-h5 font-weight-black text-white mb-4 d-flex align-center">
          <v-icon start size="small">cloud_queue</v-icon> Live Weather
        </h2>
        <p-search-field
          v-model="address"
          :items="citySuggestions"
          :loading="isSearching"
          @update:search="fetchCities"
          @update:model-value="search"
          class="weather-search rounded-lg"
        ></p-search-field>
      </div>

      <!-- Fluid Empty vs Data State Transitions -->
      <v-slide-y-transition mode="out-in">
        
        <!-- --- EMPTY OR ERROR STATE --- -->
        <div v-if="!weather || !weather.main" class="pa-10 text-center" key="empty">
          <v-icon size="80" color="grey-lighten-1" class="mb-4">
            {{ weather && weather.message ? 'error_outline' : 'travel_explore' }}
          </v-icon>
          <h3 class="text-h6 font-weight-bold" :class="weather && weather.message ? 'text-error' : 'text-grey-darken-1'">
            {{ weather && weather.message ? 'City Not Found' : 'Ready to explore?' }}
          </h3>
          <p class="text-body-2 text-grey mt-2 px-4">
            {{ weather && weather.message ? 'Please check the spelling and try a different city.' : 'Enter the name of any city above to retrieve highly accurate, real-time meteorological conditions.' }}
          </p>
        </div>

        <!-- --- WEATHER DATA STATE --- -->
        <div v-else class="pa-6" key="data">
          <!-- Main Temp Dashboard -->
          <div class="d-flex justify-space-between align-center mb-6">
            <div>
              <div class="text-h2 font-weight-black text-primary mb-1">
                {{ (weather.main.temp - 273.15).toFixed(1) }}<span class="text-h4 text-grey-darken-1 font-weight-bold">°C</span>
              </div>
              <div class="text-subtitle-1 text-grey-darken-2 font-weight-medium d-flex align-center mt-n2">
                Feels like {{ (weather.main.feels_like - 273.15).toFixed(1) }}°C
              </div>
            </div>
            
            <div class="text-right d-flex flex-column align-end">
              <v-avatar size="90" class="bg-surface-variant elevation-2 mb-2 rounded-xl">
                <v-img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" cover></v-img>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-1">{{ weather.name }}</h3>
              <p class="text-caption text-uppercase letter-spacing-1 text-grey-darken-1 font-weight-bold bg-grey-lighten-3 px-2 py-1 rounded">
                {{ weather.weather[0].description }}
              </p>
            </div>
          </div>

          <v-divider class="mb-6"></v-divider>

          <!-- Core Metrics Pill Grid -->
          <v-row dense>
            <!-- Wind Card -->
            <v-col cols="6">
              <v-card variant="tonal" class="pa-3 rounded-lg d-flex align-center h-100">
                <v-avatar color="info" size="38" class="mr-3 text-white">
                  <v-icon size="small">air</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption text-grey-darken-1 font-weight-bold text-uppercase">Wind Air</div>
                  <div class="text-subtitle-1 font-weight-black">{{ weather.wind.speed }} <span class="text-caption font-weight-medium">m/s</span></div>
                </div>
              </v-card>
            </v-col>
            
            <!-- Humidity Card -->
            <v-col cols="6">
              <v-card variant="tonal" class="pa-3 rounded-lg d-flex align-center h-100">
                <v-avatar color="light-blue-darken-2" size="38" class="mr-3 text-white">
                  <v-icon size="small">water_drop</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption text-grey-darken-1 font-weight-bold text-uppercase">Humidity</div>
                  <div class="text-subtitle-1 font-weight-black">{{ weather.main.humidity }} <span class="text-caption font-weight-medium">%</span></div>
                </div>
              </v-card>
            </v-col>

            <!-- Min Temp Card -->
            <v-col cols="6">
              <v-card variant="tonal" class="pa-3 rounded-lg d-flex align-center h-100">
                <v-avatar color="teal-darken-1" size="38" class="mr-3 text-white">
                  <v-icon size="small">arrow_downward</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption text-grey-darken-1 font-weight-bold text-uppercase">Low °C</div>
                  <div class="text-subtitle-1 font-weight-black">{{ (weather.main.temp_min - 273.15).toFixed(1) }}°</div>
                </div>
              </v-card>
            </v-col>

            <!-- Max Temp Card -->
            <v-col cols="6">
              <v-card variant="tonal" class="pa-3 rounded-lg d-flex align-center h-100">
                <v-avatar color="red-darken-1" size="38" class="mr-3 text-white">
                  <v-icon size="small">arrow_upward</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption text-grey-darken-1 font-weight-bold text-uppercase">High °C</div>
                  <div class="text-subtitle-1 font-weight-black">{{ (weather.main.temp_max - 273.15).toFixed(1) }}°</div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-slide-y-transition>

    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import PSearchField from "~/src/common/p-search-field.vue";

export default {
  name: "WeatherApp",
  components: {
    PSearchField,
  },
  data() {
    return {
      address: null,
      weather: null, // holds the API response
      citySuggestions: [],
      isSearching: false,
    };
  },
  methods: {
    async fetchCities(query) {
      if (!query || query.length < 2) {
        this.citySuggestions = [];
        return;
      }
      
      this.isSearching = true;
      try {
        // Ping our custom Node.js Express Geolocation route
        const { data } = await axios.get("/weather/search", {
          params: { query }
        });
        this.citySuggestions = Array.isArray(data) ? data : [];
      } catch (e) {
        console.error("Error fetching city suggestions:", e);
        this.citySuggestions = [];
      } finally {
        this.isSearching = false;
      }
    },
    async search() {
      // Empty string catch to reset the UI natively
      if (!this.address) {
        this.weather = null;
        return;
      }
      
      try {
        const { data } = await axios.get("/weather/info", {
          params: { address: this.address },
        });
        this.weather = data;
        
        // Debug via standard internal console exclusively so it doesn't bleed into the UI Template
        console.log("Weather API Fetch:", data);
      } catch (e) {
        console.error("Error fetching weather:", e);
      }
    },
  },
};
</script>

<style scoped>
.weather-widget {
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  background-color: rgb(var(--v-theme-surface));
}

.letter-spacing-1 {
  letter-spacing: 1px;
}
</style>
