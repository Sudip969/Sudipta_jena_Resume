<template>
  <div class="experience-container px-4">
    <div v-for="(experience, companyName) in experiences" :key="companyName" class="mb-12">
      <!-- Company Header -->
      <div class="d-flex align-center mb-8">
        <div class="company-logo-wrapper mr-4">
          <v-img
            :src="config.app.baseURL + (experience.companyLogo || 'images/logo.png').replace(/^\//, '')"
            class="company-logo"
          />
        </div>
        <div>
          <h2 class="text-h6 font-weight-bold mb-1">{{ companyName }}</h2>
          <div class="d-flex align-center ga-3 flex-wrap">
            <span class="text-caption text-grey-darken-1 d-flex align-center">
              <v-icon icon="location_on" size="small" class="mr-1" />
              {{ experience.location }}
            </span>
            <v-chip size="x-small" color="primary" variant="tonal" class="px-2">
              {{ experienceDuration(companyName) }}
            </v-chip>
          </div>
        </div>
      </div>

      <!-- Positions Timeline -->
      <div class="timeline-wrapper pl-6">
        <div
          v-for="(position, i) in experience.positions"
          :key="i"
          class="position-item mb-10 pb-2"
        >
          <div class="timeline-dot"></div>
          
          <v-card class="position-card pa-6" border elevation="0">
            <div class="d-flex justify-space-between align-start mb-4 flex-wrap ga-2">
              <div>
                <h3 class="text-subtitle-1 font-weight-bold text-primary mb-1">{{ position.name }}</h3>
                <span class="text-caption font-weight-medium text-grey" v-if="position.startDate">
                  {{ formatDate(position.startDate) }} — {{ position.endDate ? formatDate(position.endDate) : 'Present' }}
                </span>
              </div>
              <v-chip size="small" color="primary" variant="outlined" class="font-weight-bold">
                {{ positionDuration(position.startDate, position.endDate) }}
              </v-chip>
            </div>
            
            <div class="contribution-content" v-html="position.contribution"></div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const experiences = {
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
    location: "Gandhinagar, Gujarat",
    companyLogo: "/images/logo.png",
    positions: [
      {
        name: "Programmer Analyst - Full stack developer",
        startDate: "2023-04",
        endDate: "2026-01",
        contribution:
          "<ul><li>Migrated legacy Vue 2 apps to Vue 3 (Composition API) for better performance & maintainability.</li><li>Developed dynamic Nuxt.js frontends, improving UX and load speed.</li><li>Built & integrated REST APIs using Node.js + Squel ORM over SQL Server.</li><li>Implemented unit testing with Vitest/Jest, boosting UI reliability.</li><li>Created backend tests with Mocha, raising coverage by 85%.</li><li>Automated workflows with Cypress, reducing manual testing by 60%.</li></ul>",
      },
      {
        name: "Intern",
        startDate: "2023-01",
        endDate: "2023-03",
        contribution:
          "<ul><li>Developed automated invoice generation & dynamic tax computation (Node.js + PostgreSQL).</li><li>Built a responsive contact management system (Vue.js + PostgreSQL) with advanced filtering & CRUD operations.</li></ul>",
      },
    ],
  },
};

const formatDate = (dateStr) => {
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const calculateDuration = (start, end) => {
  const startDate = new Date(start + "-01");
  const endDate = end ? new Date(end + "-01") : new Date();

  let year = endDate.getFullYear() - startDate.getFullYear();
  let month = endDate.getMonth() - startDate.getMonth();
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
};

const durationLogs = ({ year, month }) => {
  if (year > 0 && month > 0) {
    return `${year} yr${year > 1 ? "s" : ""} ${month} mo${month > 1 ? "s" : ""}`;
  } else if (year > 0) {
    return `${year} yr${year > 1 ? "s" : ""}`;
  } else {
    return `${month} mo${month > 1 ? "s" : ""}`;
  }
};

const positionDuration = (start, end) => {
  return durationLogs(calculateDuration(start, end));
};

const experienceDuration = (companyName) => {
  const company = experiences[companyName];
  const totalPositions = company.positions.length;
  const start = company.positions[totalPositions - 1].startDate;
  const end = company.positions[0].endDate;
  return durationLogs(calculateDuration(start, end));
};
</script>

<style scoped>
.company-logo-wrapper {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dark-mode .company-logo-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.company-logo {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.timeline-wrapper {
  border-left: 2px solid rgba(var(--v-theme-primary), 0.1);
  position: relative;
}

.position-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -31px;
  top: 24px;
  width: 14px;
  height: 14px;
  background: white;
  border: 3px solid var(--primary-accent);
  border-radius: 50%;
  z-index: 1;
}

.dark-mode .timeline-dot {
  background: #0f172a;
}

.position-card {
  background: rgba(var(--v-theme-primary), 0.02) !important;
  border-radius: 20px !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.05) !important;
  transition: all 0.3s ease;
}

.position-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;
}

.dark-mode .position-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25) !important;
}

:deep(.contribution-content ul) {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
}

:deep(.contribution-content li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  opacity: 0.85;
  font-size: 0.875rem;
}

.ga-3 { gap: 0.75rem; }
.ga-2 { gap: 0.5rem; }
</style>
