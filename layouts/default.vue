<template>
  <v-app :class="{ 'dark-mode': isDark }">
    <v-main>
      <v-container fluid class="pa-4 pa-md-8">
        <v-row justify="center">
          <!-- Sidebar: Personal Details -->
          <v-col cols="12" md="4" lg="3">
            <v-card class="glass-card sticky-sidebar mb-6" elevation="0">
              <personal-details />
            </v-card>
          </v-col>

          <!-- Main Content Area -->
          <v-col cols="12" md="8" lg="9">
            <v-card class="glass-card pa-2 mb-6 nav-container" elevation="0">
              <div class="d-flex align-center px-4 py-2 ga-2">
                <div class="flex-grow-1">
                  <p-tabs v-model="activeTab" :tabs="tabs" color="primary" slider-color="primary" />
                </div>
                <div class="theme-toggle-wrapper">
                  <v-btn
                    icon
                    variant="tonal"
                    :color="themeColor"
                    @click="toggleTheme"
                    class="rounded-lg elevation-2 theme-toggle-btn"
                    size="small"
                  >
                    <v-icon :icon="themeIcon" />
                  </v-btn>
                </div>
              </div>
            </v-card>

            <!-- Page Content -->
            <v-card class="glass-card content-wrapper px-6 py-8" elevation="0">
              <div class="d-flex align-center mb-6">
                <v-icon :icon="currentPageIcon" color="primary" class="mr-4 text-h5" />
                <v-card-title class="text-h5 font-weight-bold pa-0 text-capitalize">
                  {{ route.name === 'index' ? 'About Me' : route.name }}
                </v-card-title>
              </div>
              <v-divider class="mb-8" opacity="0.1" />
              <slot />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
          icon: "person",
        },
        {
          title: "Experience",
          to: "/experience",
          icon: "work_history",
        },
        { title: "Projects", to: "/projects", icon: "rocket_launch" },
        { title: "Awards", to: "/awards", icon: "emoji_events" },
      ],
      theme: useTheme(),
      route: useRoute(),
    };
  },
  computed: {
    isDark() {
      return this.theme.global.name === "dark";
    },
    themeColor() {
      return this.isDark ? "amber" : "indigo";
    },
    themeIcon() {
      return this.isDark ? "dark_mode" : "light_mode";
    },
    currentPageIcon() {
      const icons = {
        about: "person_outline",
        experience: "work_outline",
        projects: "code",
        awards: "emoji_events",
        index: "person_outline",
      };
      return icons[this.route.name] || "circle";
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.isDark ? "light" : "dark";
      this.theme.global.name = newTheme;
      if (typeof document !== "undefined") {
        if (newTheme === "dark") {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }
    },
  },
  mounted() {
    // Sync initial theme
    if (this.isDark) {
      document.body.classList.add("dark-mode");
    }
  },
};
</script>

<style scoped>
.sticky-sidebar {
  position: sticky;
  top: 2rem;
}

.theme-toggle-btn {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(var(--v-theme-primary), 0.05) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
}

.theme-toggle-btn:hover {
  transform: rotate(15deg) scale(1.1);
  background: var(--primary-accent) !important;
  color: white !important;
}

.content-wrapper {
  min-height: calc(100vh - 12rem);
  border-radius: 32px !important;
  animation: slideContent 0.6s ease-out;
}

@media (max-width: 600px) {
  .nav-container {
    margin-bottom: 1.5rem !important;
  }
}

@keyframes slideContent {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

::v-deep(.v-tab__slider) {
  height: 3px !important;
  border-radius: 3px;
}
</style>
