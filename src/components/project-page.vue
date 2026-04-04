<template>
  <div class="projects-container px-md-4 px-2">
    <v-slide-group
      show-arrows
      center-active
      class="projects-slide-group"
    >
      <v-slide-group-item
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="project-card-wrapper ma-2">
          <v-card class="project-glass-card h-100 d-flex flex-column" border elevation="0">
            <!-- Project Image with Overlays -->
            <div class="project-image-wrapper">
              <v-img
                :src="project.image"
                height="200"
                cover
                class="project-image"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                </template>
              </v-img>
              
              <!-- Category Badge -->
              <v-chip
                size="x-small"
                class="category-badge font-weight-bold"
                :color="project.subtitleClass.replace('text-', '')"
                variant="flat"
              >
                {{ project.subtitle }}
              </v-chip>

              <!-- Status Badges -->
              <div class="status-container">
                <v-chip
                  v-for="(status, sIdx) in project.statuses"
                  :key="sIdx"
                  size="x-small"
                  :color="status.color"
                  variant="flat"
                  class="status-chip mb-1"
                >
                  {{ status.label }}
                </v-chip>
              </div>
            </div>

            <v-card-item class="pt-4 pb-0">
              <v-card-title class="text-h6 font-weight-bold mb-1">{{ project.title }}</v-card-title>
              <div 
                class="text-caption text-grey-darken-1 mb-1 transition-all"
                :class="{ 'line-clamp-2': !project.expanded }"
              >
                {{ project.description }}
              </div>
              <v-btn
                v-if="project.description.length > 80"
                variant="text"
                density="compact"
                color="primary"
                class="text-none px-0 mb-4 font-weight-bold show-more-btn"
                size="x-small"
                @click="project.expanded = !project.expanded"
              >
                {{ project.expanded ? 'Show Less' : 'Read More...' }}
              </v-btn>
              <div v-else class="mb-4"></div>
            </v-card-item>

            <v-card-text class="mt-auto pt-0">
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-chip
                  v-for="(tech, i) in project.technologies"
                  :key="i"
                  size="x-small"
                  :color="tech.color"
                  variant="tonal"
                  class="tech-tag"
                >
                  {{ tech.name }}
                </v-chip>
              </div>
            </v-card-text>

            <v-divider opacity="0.1" />

            <v-card-actions class="pa-4 ga-2">
              <v-btn
                block
                :variant="project.disabled ? 'tonal' : 'elevated'"
                :color="project.btnColor"
                :href="project.link"
                :target="project.link?.startsWith('http') ? '_blank' : ''"
                :disabled="project.disabled"
                class="text-none font-weight-bold rounded-lg"
                :prepend-icon="project.disabled ? 'check_circle' : 'open_in_new'"
              >
                {{ project.btnText }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script setup>
const projects = ref([
  {
    title: 'Referral Bridge',
    subtitle: 'Full-Stack Ecosystem',
    subtitleClass: 'text-deep-orange',
    statuses: [{ label: 'Pending Deployment', color: 'amber-darken-1' }],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive platform designed to streamline employee referrals. Features high-speed candidate onboarding, secure resume management, and a robust status tracking dashboard.',
    technologies: [
      { name: 'Vue.js', color: 'primary' },
      { name: 'Vuetify 3', color: 'indigo' },
      { name: 'REST API', color: 'orange' },
      { name: 'Nuxt 4', color: 'primary' },
      { name: 'Node.js', color: 'green' },
      { name: 'PostgreSQL', color: 'cyan' },
    ],
    link: 'https://github.com/Sudip969/Referral-Bridge',
    btnText: 'Explore Code',
    btnColor: 'primary',
    disabled: false,
    expanded: false
  },
  {
    title: 'AI Job Tracker',
    subtitle: 'AI & Data Visualization',
    subtitleClass: 'text-indigo',
    statuses: [{ label: 'Beta', color: 'indigo' }],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Intelligent Kanban board with Gemini-powered Resume Analyzer. Features fluid Drag-and-Drop UX and complex state management.',
    technologies: [
      { name: 'Vue.js', color: 'primary' },
      { name: 'Vuetify 3', color: 'indigo' },
      { name: 'REST API', color: 'orange' },
      { name: 'Nuxt 3', color: 'primary' },
      { name: 'Gemini AI', color: 'purple' },
      { name: 'Prisma', color: 'blue' },
    ],
    link: 'https://github.com/Sudip969/AI-job-tracker',
    btnText: 'View Source',
    btnColor: 'primary',
    disabled: false,
    expanded: false
  },
  {
    title: 'Visual Weather',
    subtitle: 'Responsive Web App',
    subtitleClass: 'text-info',
    statuses: [{ label: 'Under Maintenance', color: 'grey-darken-1' }],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    description: 'Meteorological dashboard provideing real-time weather metrics with a dynamically adapting UI based on local atmospheric statuses.',
    technologies: [
      { name: 'Vue.js', color: 'primary' },
      { name: 'Vuetify 3', color: 'indigo' },
      { name: 'REST API', color: 'orange' },
      { name: 'Sass', color: 'pink' },
      { name: 'Nuxt 4', color: 'teal' },
    ],
    link: 'https://github.com/Sudip969/Sudipta_jena_Resume/tree/master/src/components/weather-app',
    btnText: 'Live Demo',
    btnColor: 'info',
    disabled: false,
    expanded: false
  },
  {
    title: 'Digital Resume',
    subtitle: 'Modern Portfolio',
    subtitleClass: 'text-success',
    statuses: [{ label: 'Live', color: 'success' }],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80',
    description: 'The very website you are browsing! Engineered for speed, SEO, and polished UI with heavy emphasis on modern design trends.',
    technologies: [
      { name: 'Vue.js', color: 'primary' },
      { name: 'Vuetify 3', color: 'indigo' },
      { name: 'Nuxt 4', color: 'teal' },
    ],
    link: null,
    btnText: 'You Are Here',
    btnColor: 'success',
    disabled: true,
    expanded: false
  }
]);
</script>

<style scoped>
.project-card-wrapper {
  width: 320px;
  height: 100%;
  display: flex;
}

@media (max-width: 600px) {
  .project-card-wrapper {
    width: min(300px, calc(100vw - 64px));
  }
}

.project-glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 244, 255, 0.8) 100%) !important;
  backdrop-filter: blur(var(--glass-blur)) !important;
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
  border-radius: 20px !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;
}

.dark-mode .project-glass-card {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4) !important;
}

.project-glass-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-accent) !important;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15) !important;
}

.dark-mode .project-glass-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.2) !important;
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin: 12px;
}

.project-image {
  transition: transform 0.6s ease;
}

.project-glass-card:hover .project-image {
  transform: scale(1.1);
}

.category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.9) !important;
}

.dark-mode .category-badge {
  background: rgba(0, 0, 0, 0.7) !important;
}

.status-container {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.status-chip {
  font-size: 0.6rem !important;
  height: 20px !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-tag {
  font-weight: 600;
  letter-spacing: 0.2px;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all {
  transition: all 0.3s ease;
}

.show-more-btn {
  text-decoration: underline;
  opacity: 0.8;
}

.show-more-btn:hover {
  opacity: 1;
}

.ga-2 { gap: 0.5rem; }
</style>
