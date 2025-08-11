<template>
  <v-card-item>
    <v-card-text class="pl-0" v-html="experienceDetails"> </v-card-text>
    <v-row>
      <v-col>
        <v-card variant="tonal" class="rounded-lg">
          <div class="px-4 py-4">
            <v-row v-for="(techStack, label, index) in techStacks">
              <v-col cols="3" class="text-h6 font-weight-bold pl-4"
                >{{ label }}
              </v-col>
              <v-col cols="2" class="d-flex" v-for="(element, i) in techStack">
                <v-img
                  :src="`/images/${element.icon}`"
                  contain
                  height="36"
                  :key="i"
                  v-tooltip:bottom="element.title"
                ></v-img>
              </v-col>
              <v-divider v-if="index !== Object.keys(techStacks).length - 1" />
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card-item>
</template>
<script>
export default {
  name: "about-page.vue",
  data() {
    return {
      experienceDetails:
        "<p>I am a programmer who enjoys building efficient systems and clean user experiences — one well-written component at a time.</p><br><p>My focus is Full Stack Web Development, with a strong emphasis on frontend frameworks like <strong>Vue.js, Nuxt.js</strong>, and backend services using <strong>Node.js and SQL Server</strong>. Since <b>2021</b>, I’ve been working in web development professionally, crafting scalable applications and modernizing legacy systems.</p> <br> <p>I currently work as a <strong>Full Stack Developer</strong> at ArguSoft India, where I contribute to migrating apps to Vue 3, building REST APIs, automating tests, and improving system reliability. My technical stack also includes <strong>PostgreSQL, MongoDB, Express.js,</strong> and modern testing tools like <strong> Cypress, Mocha, and Vitest</strong>.</p> <br> <p>Beyond coding, I enjoy solving algorithmic problems, exploring performance optimizations, and staying up to date with the latest development trends.</p>",
      techStacks: {
        Frontend: [
          { icon: "Vuetify.svg", title: "Vuetify" },
          { icon: "Vuejs.svg", title: "Vue js" },
          { icon: "React.svg", title: "React" },
        ],
        Backend: [
          { icon: "Nodejs.svg", title: "Node js" },
          { icon: "Express.svg", title: "Express" },
        ],
        Database: [
          { icon: "MySQL.svg", title: "MySql" },
          { icon: "MicrosoftSQLServer.svg", title: "Sql Server" },
          { icon: "PostgresSQL.svg", title: "Postgres Sql" },
          { icon: "MongoDB.svg", title: "MongoBD" },
        ],
        Testing: [
          { icon: "Cypress.svg", title: "Cypress" },
          { icon: "Vitejs.svg", title: "Vitest" },
          { icon: "Jest.svg", title: "Jest" },
          { icon: "Mocha.svg", title: "Mocha" },
        ],
        Tools: [
          { icon: "Azure.svg", title: "Azure" },
          { icon: "Git.svg", title: "Git" },
          { icon: "GitHub.svg", title: "Git hub" },
        ],
      },
    };
  },
};
</script>
