<template>
  <v-container class="py-8">
    <v-row justify="start">
      <!-- Certificate 1: Employee of the Month -->
      <v-col cols="12" sm="12" md="10" lg="8">
        <v-card class="award-card h-100 d-flex flex-column" elevation="3">
          
          <!-- Safely corrected Nuxt 3 static /images/ path -->
          <v-img 
            :src="`${config.app.baseURL}images/Sudipta employee of the month.png`" 
            class="bg-grey-lighten-2 border-b"
          >
            <!-- Fallback for image loading state -->
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-item class="pt-5">
            <v-card-title class="text-h5 font-weight-bold mb-1">Employee of the Month</v-card-title>
            <v-card-subtitle class="text-primary font-weight-medium d-flex align-center">
              <v-icon start size="small">emoji_events</v-icon>
              Argusoft India
            </v-card-subtitle>
          </v-card-item>

          <v-card-text class="flex-grow-1 text-body-1 mt-2">
            Recognized for exceptional commitment to engineering excellence, rapid delivery of the Vue 3 migration pipelines, and dramatically increasing our automated QA test coverage boundaries.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4 bg-surface-variant">
            <v-btn
              variant="elevated"
              color="primary"
              href="https://drive.google.com/file/d/18T2q5sMfOzDvkWQMqKUoR5A16hshTSe7/view"
              target="_blank"
              prepend-icon="open_in_new"
              class="text-none flex-grow-1 font-weight-bold"
            >
              View Certificate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AwardsPage",
  data() {
    return {
      config: useRuntimeConfig(),
    };
  },
};
</script>

<style scoped>
.award-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 12px;
  overflow: hidden;
}

.award-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15) !important;
}
</style>
