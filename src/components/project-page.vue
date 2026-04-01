<template>
  <v-container class="py-8">
    <v-row>
      <v-col 
        v-for="(project, index) in projects" 
        :key="index"
        cols="12" 
        sm="6" 
        md="4"
        lg="3"
        class="mb-6"
      >
        <v-card class="project-card h-100 d-flex flex-column" elevation="2">
          <v-img 
            :src="project.image" 
            height="160" 
            cover 
            class="bg-grey-lighten-2 position-relative"
          >
            <!-- Deployment Status Badges -->
            <div class="status-badge-container d-flex flex-column align-end">
              <v-chip
                v-for="(status, sIdx) in project.statuses"
                :key="sIdx"
                size="x-small"
                :color="status.color"
                variant="flat"
                class="status-badge font-weight-bold mb-1"
                elevation="4"
              >
                {{ status.label }}
              </v-chip>
            </div>

            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-item class="pt-3 pb-1">
            <v-card-title class="text-subtitle-1 font-weight-bold mb-0">{{ project.title }}</v-card-title>
            <v-card-subtitle 
              class="text-caption font-weight-medium" 
              :class="project.subtitleClass"
            >
              {{ project.subtitle }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text class="flex-grow-1 text-caption py-2 line-height-tight">
            <template v-if="!project.expanded">
              {{ truncateText(project.description, 80) }}
            </template>
            <template v-else>
              {{ project.description }}
            </template>
            
            <a 
              v-if="project.description.length > 80"
              href="javascript:void(0)" 
              class="text-primary font-weight-bold ml-1 text-decoration-none more-btn"
              @click="project.expanded = !project.expanded"
            >
              {{ project.expanded ? 'Less' : 'More...' }}
            </a>
          </v-card-text>

          <v-card-text class="pt-0 pb-2">
            <div class="d-flex flex-wrap gap-1">
              <v-chip 
                v-for="(tech, i) in project.technologies" 
                :key="i"
                size="x-small" 
                :color="tech.color" 
                variant="tonal" 
                class="tech-chip mr-1 mb-1"
              >
                {{ tech.name }}
              </v-chip>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-2 bg-surface-variant">
            <v-btn
              variant="elevated"
              :color="project.btnColor"
              :href="project.link"
              :target="project.link?.startsWith('http') ? '_blank' : ''"
              :to="project.link?.startsWith('/') ? project.link : ''"
              :disabled="project.disabled"
              prepend-icon="open_in_new"
              size="small"
              class="text-none flex-grow-1"
            >
              {{ project.btnText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [
        {
          title: 'Referral Bridge',
          subtitle: 'Employee Referral Ecosystem',
          subtitleClass: 'text-deep-orange',
          statuses: [
            { label: 'To be Deployed', color: 'amber-darken-1' }
          ],
          image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
          description: 'A comprehensive platform designed to streamline employee referrals. Features a high-speed candidate onboarding system, secure resume upload and view, and a robust status tracking dashboard.',
          technologies: [
            { name: 'Nuxt 4', color: 'primary' },
            { name: 'Vuetify 4', color: 'indigo' },
            { name: 'Node.js', color: 'green-darken-2' },
            { name: 'SQLite', color: 'cyan' },
            { name: 'JWT', color: 'amber-darken-2' }
          ],
          link: 'https://github.com/Sudip969/Referral-Bridge',
          btnText: 'View Source',
          btnColor: 'deep-orange',
          expanded: false
        },
        {
          title: 'AI Job Tracker',
          subtitle: 'Full-Stack AI Application',
          subtitleClass: 'text-primary',
          statuses: [
            { label: 'Not Deployed Yet', color: 'grey-darken-1' }
          ],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          description: 'An intelligent Kanban board featuring a Gemini-powered Resume Analyzer. Features fluid Drag-and-Drop UX, complex Vuex state management, and a robust Node.js API with a Prisma ORM backend.',
          technologies: [
            { name: 'Nuxt 3', color: 'primary' },
            { name: 'Vuex', color: 'success' },
            { name: 'Node.js', color: 'blue-darken-2' },
            { name: 'Generative AI', color: 'deep-purple-accent-2' }
          ],
          link: 'https://github.com/Sudip969/AI-job-tracker/tree/master',
          btnText: 'View Source',
          btnColor: 'primary',
          expanded: false
        },
        {
          title: 'Weather Dashboard',
          subtitle: 'Data Visualization API',
          subtitleClass: 'text-info',
          statuses: [
            { label: 'Server Not Deployed', color: 'grey-darken-1' }
          ],
          image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
          description: 'A sleek, modern meteorological dashboard providing real-time data metrics, environmental forecasting, and a dynamically adapting UI based on real-world local atmospheric statuses.',
          technologies: [
            { name: 'Vue.js', color: 'primary' },
            { name: 'REST API', color: 'orange-darken-2' },
            { name: 'SCSS', color: 'pink' }
          ],
          link: '/weather-app',
          btnText: 'Live Demo',
          btnColor: 'info',
          expanded: false
        },
        {
          title: 'Digital Resume',
          subtitle: 'Personal Web Identity',
          subtitleClass: 'text-success',
          statuses: [
            { label: 'Live', color: 'success' }
          ],
          image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80',
          description: 'The very website you are actively browsing! Engineered using Server Side Rendering frameworks to ensure lightning-fast SEO optimization and fully responsive, fluid layouts.',
          technologies: [
            { name: 'Nuxt Router', color: 'primary' },
            { name: 'Vuetify 3', color: 'indigo' },
            { name: 'SSR', color: 'teal' }
          ],
          link: null,
          btnText: 'You Are Here',
          btnColor: 'success',
          disabled: true,
          expanded: false
        }
      ]
    };
  },
  methods: {
    truncateText(text, length) {
      if (!text) return '';
      if (text.length <= length) return text;
      return text.substring(0, length);
    }
  }
};
</script>

<style scoped>
.project-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 8px;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
}

.status-badge-container {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.status-badge {
  opacity: 0.95;
  font-size: 0.6rem !important;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  height: 20px !important;
}

.tech-chip {
  font-weight: 500;
  letter-spacing: 0.1px;
  font-size: 0.65rem !important;
}

.line-height-tight {
  line-height: 1.35;
}

.more-btn {
  font-size: 0.75rem;
  cursor: pointer;
}
</style>

