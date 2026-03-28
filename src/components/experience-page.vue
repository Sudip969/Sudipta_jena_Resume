<template>
  <v-container class="py-8">
    <!-- Iterate over Companies -->
    <v-row v-for="(experience, companyName) in experiences" :key="companyName" class="mb-12">
      <v-col cols="12">
        <v-card variant="elevated" elevation="2" class="pa-6 rounded-xl h-100 biography-card">
          <div class="d-flex flex-column flex-sm-row align-center align-sm-start mb-6">
            <v-card
              class="d-flex align-center justify-center bg-surface-variant rounded-lg border pa-2 mr-sm-6 mb-4 mb-sm-0"
              elevation="0"
              width="80"
              height="80"
            >
              <v-img 
                :src="experience.companyLogo || '/images/logo.png'" 
                style="object-fit: contain; max-height: 60px; max-width: 60px;"
              ></v-img>
            </v-card>
            
            <div class="text-center text-sm-left flex-grow-1 pt-1">
              <h3 class="text-h4 font-weight-bold text-primary">{{ companyName }}</h3>
              <div class="d-flex flex-column flex-sm-row align-center align-sm-start mt-3 gap-2">
                <v-chip color="info" size="small" variant="flat" class="font-weight-bold mr-0 mr-sm-3 mb-2 mb-sm-0">
                  <v-icon start size="small">schedule</v-icon>
                  Total: {{ experienceDuration(companyName) }}
                </v-chip>
                <span class="text-subtitle-1 text-grey-darken-1 d-flex align-center font-weight-medium">
                  <v-icon start size="small" class="mr-1">location_on</v-icon>
                  {{ experience.location }}
                </span>
              </div>
            </div>
          </div>

          <v-divider class="mb-8"></v-divider>

          <!-- Timeline -->
          <v-timeline align="start" density="compact" side="end" class="experience-timeline px-sm-6">
            <v-timeline-item
              v-for="(position, i) in experience.positions"
              :key="i"
              dot-color="primary"
              size="small"
              fill-dot
            >
              <v-card variant="tonal" class="rounded-lg pa-5 mb-6">
                <div class="d-flex flex-column flex-md-row justify-space-between align-md-center mb-4">
                  <h4 class="text-h6 font-weight-bold mb-2 mb-md-0 text-primary">{{ position.name }}</h4>
                  <v-chip size="small" color="primary" variant="outlined" class="font-weight-bold ml-0 ml-md-4 align-self-start align-self-md-center">
                    {{ positionDuration(position.startDate, position.endDate) }}
                  </v-chip>
                </div>
                
                <div class="text-body-1 contribution-content" v-html="position.contribution"></div>
              </v-card>
            </v-timeline-item>
          </v-timeline>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExperiencePage",
  data() {
    return {
      experiences: {
        "Revolution India": {
          location: "Hyderabad, Telangana",
          companyLogo: "/images/revolutionLogo.png",
          positions: [
            {
              name: "Software Development Engineer - I / SDE-I",
              startDate: "2026-02",
              endDate: null,
              contribution:
                "<ul><li>Driving ongoing migration from Vue 2 to Vue 3 Using Composition API, improving maintainability, performance, and scalability.</li><li>Identifying and resolving critical frontend bugs, ensuring system stability and enhanced user experience.</li><li>Used AI tools to boost frontend efficiency by 30%, automate repetitive tasks, and accelerate development.</li></ul>",
            },
          ],
        },
        Argusoft: {
          location: "Gandhinagar, Gujurat",
          companyLogo: "/images/logo.png",
          positions: [
            {
              name: "Programmer Analyst - Full stack developer",
              startDate: "2023-04",
              endDate: null,
              contribution:
                "<ul><li>Migrated legacy Vue 2 apps to Vue 3 (Composition API) for better performance & maintainability.</li><li>Developed dynamic Nuxt.js frontends, improving UX and load speed.</li><li>Built & integrated REST APIs using Node.js + Squel ORM over SQL Server.</li><li>Implemented unit testing with Vitest/Jest, boosting UI reliability.</li><li>Created backend tests with Mocha, raising coverage by 85%.</li><li>Automated workflows with Cypress, reducing manual testing by 60%.</li><li>Enhanced deployment efficiency with automation strategies recognized by PM & dev team.</li><li>Maintained data integrity via validation & audit trails; active in Agile ceremonies.</li>",
            },
            {
              name: "Intern",
              startDate: "2023-01",
              endDate: "2023-03",
              contribution:
                "<ul><li>Developed automated invoice generation & dynamic tax computation (Node.js + PostgreSQL).</li> <li>Built a responsive contact management system (Vue.js + PostgreSQL) with advanced filtering & CRUD operations.</li></ul>",
            },
          ],
        },
      },
    };
  },
  methods: {
    positionDuration(start, end) {
      const positionDuration = this.calculateDuration(start, end);
      return this.durationLogs(positionDuration);
    },
    experienceDuration(companyName) {
      const totalPosition = this.experiences[companyName].positions.length;
      const experienceDuration = this.calculateDuration(
        this.experiences[companyName].positions[totalPosition - 1].startDate,
        this.experiences[companyName].positions[0].endDate
      );
      return this.durationLogs(experienceDuration);
    },
    calculateDuration(start, end) {
      start = new Date(start + "-01");
      end = end ? new Date(end + "-01") : new Date();

      let year = end.getFullYear() - start.getFullYear();
      let month = end.getMonth() - start.getMonth();
      if (month < 0) {
        year--;
        month += 12;
      }
      month += 1;
      if (month >= 12) {
        year += Math.floor(month / 12);
        month = month % 12;
      }
      return { year, month };
    },
    durationLogs({ year, month }) {
      if (year > 0 && month > 0) {
        return `${year} yr${year > 1 ? "s" : ""} ${month} month${
          month > 1 ? "s" : ""
        }`;
      } else if (year > 0) {
        return `${year} yr${year > 1 ? "s" : ""}`;
      } else {
        return `${month} month${month > 1 ? "s" : ""}`;
      }
    },
  },
};
</script>

<style scoped>
/* Scoped Styling for Experience Contribution Bullets */
::v-deep(.contribution-content ul) {
  padding-left: 20px;
  margin-top: 8px;
}

::v-deep(.contribution-content li) {
  margin-bottom: 12px;
  line-height: 1.8;
  color: var(--v-theme-on-surface);
  list-style-type: disc;
}

/* Color the bullet points properly to match the primary theme */
::v-deep(.contribution-content li::marker) {
  color: rgb(var(--v-theme-primary));
}
</style>
