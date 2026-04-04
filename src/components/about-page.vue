<template>
  <div class="about-container px-4">
    <!-- Biography Section -->
    <section class="mb-12">
      <div class="d-flex align-center mb-6">
        <v-icon icon="account_box" color="primary" class="mr-3" />
        <h2 class="text-h6 font-weight-bold mb-0">Professional Biography</h2>
      </div>
      <div class="bio-content text-body-2" v-html="experienceDetails"></div>
    </section>

    <!-- Technical Arsenal Section -->
    <section>
      <div class="d-flex align-center mb-8">
        <v-icon icon="laptop" color="primary" class="mr-3" />
        <h2 class="text-h6 font-weight-bold mb-0">Technical Arsenal</h2>
      </div>

      <v-row>
        <v-col
          v-for="(techStack, label) in techStacks"
          :key="label"
          cols="12"
          class="mb-8"
        >
          <h3 class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-1 text-uppercase letter-spacing-2">
            {{ label }}
          </h3>
          
          <div class="d-flex flex-wrap ga-4">
            <v-tooltip
              v-for="(element, i) in techStack"
              :key="i"
              location="top"
              offset="10"
            >
              <template v-slot:activator="{ props }">
                <div
                  v-bind="props"
                  class="tech-box d-flex align-center justify-center"
                >
                  <img
                    :src="`${config.app.baseURL}images/${element.icon}`"
                    class="tech-icon"
                    :alt="element.title"
                  />
                </div>
              </template>
              <span class="font-weight-bold">{{ element.title }}</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const experienceDetails = `
  <p>I am a <strong>Full Stack Developer</strong> focused on building scalable web applications and delivering clean, high-performance user experiences.</p>
  <p>With over 3 years of professional experience, I specialize in frontend development using <strong>Vue.js (Vue 2 & Vue 3), Nuxt.js</strong>, and have hands-on experience with <strong>React</strong>. On the backend, I work with <strong>Node.js</strong> and <strong>RESTful APIs</strong>, along with databases such as <strong>SQL Server, PostgreSQL, MySQL</strong>, and <strong>MongoDB</strong>.</p>
  <p>Currently, I am working as a <strong>Software Development Engineer - I</strong> at <strong>Revolution India</strong>, where I am leading the migration of legacy applications from <strong>Vue 2 to Vue 3</strong> using the <strong>Composition API</strong>, improving performance, maintainability, and scalability.</p>
  <p>Previously, at <strong>ArguSoft India</strong>, I contributed to migrating multiple application modules, building and integrating <strong>RESTful APIs</strong>, and improving system reliability through <strong>backend validations</strong> and <strong>automation</strong>.</p>
`;

const techStacks = {
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
  ],
  Tools: [
    { icon: "Azure.png", title: "Azure" },
    { icon: "Git.png", title: "Git" },
    { icon: "GitHub.png", title: "GitHub" },
  ],
};
</script>

<style scoped>
.bio-content {
  line-height: 1.8;
  opacity: 0.9;
}

:deep(.bio-content p) {
  margin-bottom: 1.5rem;
}

:deep(.bio-content strong) {
  color: var(--primary-accent);
  font-weight: 600;
}

.tech-box {
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.dark-mode .tech-box {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tech-box:hover {
  transform: translateY(-8px) scale(1.1);
  border-color: var(--primary-accent);
  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.15);
}

.tech-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tech-box:hover .tech-icon {
  transform: scale(1.1);
}

.letter-spacing-2 {
  letter-spacing: 2px !important;
}

.ga-4 {
  gap: 1rem;
}
</style>
