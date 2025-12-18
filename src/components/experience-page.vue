<template>
  <v-row class="mt-1">
    <v-col
      v-for="(experience, companyName) in experiences"
      :key="companyName"
      cols="12"
      sm="6"
    >
      <v-row>
        <!-- Logo -->
        <v-col cols="2" sm="2">
          <v-img src="/images/logo.png" height="36" class="bg-white"></v-img>
        </v-col>

        <!-- Content -->
        <v-col cols="12" sm="10" class="d-flex flex-column">
          <span class="text-h6">{{ companyName }}</span>
          <span class="text-subtitle-2">
            {{ experienceDuration(companyName) }}
          </span>
          <span class="text-subtitle-2 text-grey">
            {{ experience.location }}
          </span>

          <v-timeline
            align="start"
            side="end"
            truncate-line="start"
            class="mt-2"
          >
            <v-timeline-item
              v-for="(position, i) in experience.positions"
              :key="i"
              dot-color="primary"
              size="small"
            >
              <v-card flat>
                <v-card-title class="py-0">
                  {{ position.name }}
                </v-card-title>
                <v-card-subtitle>
                  {{ positionDuration(position.startDate, position.endDate) }}
                </v-card-subtitle>
                <v-card-text>
                  <span v-html="position.contribution"></span>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "experience-page.vue",
  data() {
    return {
      experiences: {
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
