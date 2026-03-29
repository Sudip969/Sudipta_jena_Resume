<template>
  <v-container class="py-8">
    <v-row>
      <!-- PROJECT 1: AI Job Tracker -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="project-card h-100 d-flex flex-column" elevation="3">
          <v-img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
            height="200" 
            cover 
            class="bg-grey-lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-item class="pt-4">
            <v-card-title class="text-h5 font-weight-bold mb-1">AI Job Tracker</v-card-title>
            <v-card-subtitle class="text-primary font-weight-medium">Full-Stack AI Application</v-card-subtitle>
          </v-card-item>

          <v-card-text class="flex-grow-1 text-body-1">
            An intelligent Kanban board featuring a Gemini-powered Resume Analyzer. Features fluid Drag-and-Drop UX, complex Vuex state management, and a robust Node.js API with a Prisma ORM backend.
          </v-card-text>

          <v-card-text class="pt-0">
            <div class="d-flex flex-wrap gap-2">
              <v-chip size="small" color="primary" variant="tonal" class="tech-chip mr-2 mb-2">Nuxt 3</v-chip>
              <v-chip size="small" color="success" variant="tonal" class="tech-chip mr-2 mb-2">Vuex</v-chip>
              <v-chip size="small" color="blue-darken-2" variant="tonal" class="tech-chip mr-2 mb-2">Node.js</v-chip>
              <v-chip size="small" color="deep-purple-accent-2" variant="tonal" class="tech-chip mr-2 mb-2">Generative AI</v-chip>
              <v-chip size="small" color="cyan" variant="tonal" class="tech-chip mr-2 mb-2">SQLite</v-chip>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4 bg-surface-variant">
            <v-btn
              variant="elevated"
              color="primary"
              href="https://github.com/Sudip969/AI-job-tracker/tree/master"
              target="_blank"
              prepend-icon="device_hub"
              class="text-none flex-grow-1"
            >
              View Source
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- PROJECT 2: Weather App -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="project-card h-100 d-flex flex-column" elevation="3">
          <v-img 
            src="https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80" 
            height="200" 
            cover 
            class="bg-grey-lighten-2"
          ></v-img>

          <v-card-item class="pt-4">
            <v-card-title class="text-h5 font-weight-bold mb-1">Live Weather Dashboard</v-card-title>
            <v-card-subtitle class="text-info font-weight-medium">Data Visualization API</v-card-subtitle>
          </v-card-item>

          <v-card-text class="flex-grow-1 text-body-1">
            A sleek, modern meteorological dashboard providing real-time data metrics, environmental forecasting, and a dynamically adapting UI based on real-world local atmospheric statuses.
          </v-card-text>

          <v-card-text class="pt-0">
            <div class="d-flex flex-wrap gap-2">
              <v-chip size="small" color="primary" variant="tonal" class="tech-chip mr-2 mb-2">Vue.js</v-chip>
              <v-chip size="small" color="orange-darken-2" variant="tonal" class="tech-chip mr-2 mb-2">REST API</v-chip>
              <v-chip size="small" color="pink" variant="tonal" class="tech-chip mr-2 mb-2">SCSS</v-chip>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4 bg-surface-variant">
            <v-btn
              variant="elevated"
              color="info"
              to="/weather-app"
              prepend-icon="open_in_new"
              class="text-none flex-grow-1"
            >
              Live Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- PROJECT 3: Portfolio Resume -->
      <!-- <v-col cols="12" md="6" lg="4">
        <v-card class="project-card h-100 d-flex flex-column" elevation="3">
          <v-img 
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80" 
            height="200" 
            cover 
            class="bg-grey-lighten-2"
          ></v-img>

          <v-card-item class="pt-4">
            <v-card-title class="text-h5 font-weight-bold mb-1">Interactive Digital Resume</v-card-title>
            <v-card-subtitle class="text-success font-weight-medium">Personal Web Identity</v-card-subtitle>
          </v-card-item>

          <v-card-text class="flex-grow-1 text-body-1">
            The very website you are actively browsing! Engineered using Server Side Rendering frameworks to ensure lightning-fast SEO optimization and fully responsive, fluid layouts.
          </v-card-text>

          <v-card-text class="pt-0">
            <div class="d-flex flex-wrap gap-2">
              <v-chip size="small" color="primary" variant="tonal" class="tech-chip mr-2 mb-2">Nuxt Router</v-chip>
              <v-chip size="small" color="indigo" variant="tonal" class="tech-chip mr-2 mb-2">Vuetify 3</v-chip>
              <v-chip size="small" color="teal" variant="tonal" class="tech-chip mr-2 mb-2">SSR</v-chip>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4 bg-surface-variant">
            <v-btn
              variant="outlined"
              color="success"
              disabled
              prepend-icon="mdi-check-circle-outline"
              class="text-none flex-grow-1 border-opacity-50"
            >
              You Are Here
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col> -->

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectPage'
};
</script>

<style scoped>
.project-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 12px;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15) !important;
}

.tech-chip {
  font-weight: 500;
  letter-spacing: 0.2px;
}
</style>
