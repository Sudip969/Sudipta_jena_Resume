<template>
  <v-container class="py-8">
    <v-row>
      <!-- Left Column: Biography -->
      <v-col cols="12" md="12" class="pr-md-8 mb-6 mb-md-0">
        <v-card variant="elevated" elevation="2" class="pa-6 rounded-xl h-100 biography-card">
          <v-card-title class="text-h5 font-weight-bold px-0 pt-0 pb-4 text-primary d-flex align-center">
            <v-icon start color="primary">account_circle</v-icon> Professional Biography
          </v-card-title>
          <!-- Using a wrapper division to style all injected <p> and <strong> tags via scoped CSS -->
          <v-card-text 
            class="px-0 text-body-1 bio-content" 
            v-html="experienceDetails">
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Column: Tech Stack -->
      <v-col cols="12" md="12">
        <v-card variant="elevated" elevation="2" class="pa-6 rounded-xl h-100">
          <v-card-title class="text-h5 font-weight-bold px-0 pt-0 pb-6 text-primary">
            <v-icon start color="primary">data_object</v-icon> Technical Arsenal
          </v-card-title>
          
          <v-card-text class="px-0 pt-0">
            <v-row>
              <v-col 
                v-for="(techStack, label, index) in techStacks" 
                :key="label" 
                cols="12"
                sm="6"
                md="4"
                class="mb-6"
              >
                <h3 class="text-subtitle-1 font-weight-bold mb-3 text-grey-darken-1 text-uppercase letter-spacing-1">
                  {{ label }}
                </h3>
                
                <v-row class="mx-0" justify="start">
                  <v-col 
                    cols="auto" 
                    v-for="(element, i) in techStack" 
                    :key="i"
                    class="pa-2"
                  >
                    <!-- We wrap the tooltip target in a span because v-tooltip activator slot sometimes struggles binding directly to v-card -->
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-card 
                          v-bind="props"
                          class="d-flex align-center justify-center tech-icon-box bg-surface-variant rounded-lg"
                          elevation="1"
                          width="64"
                          height="64"
                        >
                          <img
                            :src="`/images/${element.icon}`"
                            style="object-fit: contain; max-height: 40px; max-width: 40px;"
                            :alt="element.title"
                          />
                        </v-card>
                      </template>
                      <span>{{ element.title }}</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      experienceDetails:
        "<p>I am a programmer who enjoys building efficient systems and clean user experiences — one well-written component at a time.</p><p>My focus is Full Stack Web Development, with a strong emphasis on frontend frameworks like <strong>Vue.js, Nuxt.js</strong>, and backend services using <strong>Node.js and SQL Server</strong>. Since <b>2021</b>, I’ve been working in web development professionally, crafting scalable applications and modernizing legacy systems.</p><p>I currently work as a <strong>Software Development Engineer - I</strong> at Revolution India, where I drive migrations from Vue 2 to Vue 3 using the Composition API and leverage AI tools to boost efficiency. Previously, I was a <strong>Full Stack Developer</strong> at ArguSoft India, where I contributed to building REST APIs, automating tests, and improving system reliability using tools like <strong>PostgreSQL, MongoDB, Cypress, Mocha, and Vitest</strong>.</p><p>Beyond coding, I enjoy solving algorithmic problems, exploring performance optimizations, and staying up to date with the latest development trends.</p>",
      techStacks: {
        Frontend: [
          { icon: "Vuetify.png", title: "Vuetify" },
          { icon: "Vuejs.png", title: "Vue js" },
          { icon: "React.png", title: "React" },
        ],
        Backend: [
          { icon: "Nodejs.png", title: "Node js" },
          { icon: "Express.png", title: "Express" },
        ],
        Database: [
          { icon: "MySQL.png", title: "MySql" },
          { icon: "MicrosoftSQLServer.png", title: "Sql Server" },
          { icon: "PostgresSQL.png", title: "Postgres Sql" },
          { icon: "MongoDB.png", title: "MongoDB" },
        ],
        Testing: [
          { icon: "Cypress.png", title: "Cypress" },
          { icon: "Vitejs.png", title: "Vitest" },
          { icon: "Jest.png", title: "Jest" },
          { icon: "Mocha.png", title: "Mocha" },
        ],
        Tools: [
          { icon: "Azure.png", title: "Azure" },
          { icon: "Git.png", title: "Git" },
          { icon: "GitHub.png", title: "Git hub" },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* Biography raw HTML injection styling */
::v-deep(.bio-content p) {
  margin-bottom: 20px;
  line-height: 1.8;
  color: inherit;
}

::v-deep(.bio-content strong), ::v-deep(.bio-content b) {
  color: rgb(var(--v-theme-primary));
  font-weight: 700;
}

/* Micro-Animation for Technology Badges */
.tech-icon-box {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.tech-icon-box:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15) !important;
  background-color: rgb(var(--v-theme-surface)) !important;
}

.letter-spacing-1 {
  letter-spacing: 1px;
}
</style>
