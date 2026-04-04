<template>
  <div class="awards-container px-4">
    <v-row justify="start">
      <v-col cols="12" md="8" lg="7">
        <v-card class="award-glass-card" border elevation="0">
          <div class="award-image-wrapper">
            <v-img
              :src="`${config.app.baseURL}images/Sudipta employee of the month.png`"
              cover
              class="award-image"
            >
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
                  <v-progress-circular indeterminate color="primary" />
                </div>
              </template>
            </v-img>
          </div>

          <v-card-item class="pa-6">
            <div class="d-flex align-center mb-2">
              <v-icon icon="emoji_events" color="amber-darken-2" class="mr-2" />
              <v-card-title class="text-h6 font-weight-bold pa-0">Employee of the Month</v-card-title>
            </div>
            <v-card-subtitle class="text-primary font-weight-bold mb-4">
              Argusoft India
            </v-card-subtitle>
            
            <p class="text-body-2 text-grey-darken-2 mb-6 line-height-relaxed">
              Recognized for exceptional commitment to engineering excellence, rapid delivery of the Vue 3 migration pipelines, and dramatically increasing automated QA test coverage boundaries.
            </p>

            <v-btn
              block
              color="primary"
              variant="elevated"
              href="https://drive.google.com/file/d/18T2q5sMfOzDvkWQMqKUoR5A16hshTSe7/view"
              target="_blank"
              prepend-icon="workspace_premium"
              class="rounded-xl font-weight-bold text-none py-3"
            >
              Verify Certificate
            </v-btn>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>

<style scoped>
.award-glass-card {
  background: rgba(var(--v-theme-primary), 0.02) !important;
  border-radius: 24px !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.05) !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.award-glass-card:hover {
  transform: translateY(-8px);
  background: rgba(var(--v-theme-primary), 0.04) !important;
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
}

.dark-mode .award-glass-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
}

.award-image-wrapper {
  overflow: hidden;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.05);
}

.award-image {
  max-height: 400px;
  transition: transform 0.6s ease;
}

.award-glass-card:hover .award-image {
  transform: scale(1.03);
}

.line-height-relaxed {
  line-height: 1.7;
}
</style>
