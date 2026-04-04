<template>
  <div class="pa-6">
    <div class="text-center mb-8">
      <profile-photo />
      <h1 class="text-h4 font-weight-bold mb-1 text-gradient">Sudipta Jena</h1>
      <v-chip
        color="primary"
        variant="tonal"
        class="font-weight-medium px-4 py-1"
        style="height: auto"
      >
        Full Stack Developer
      </v-chip>
    </div>

    <v-divider class="mb-8" opacity="0.1" />

    <div class="contact-grid">
      <div
        v-for="(detail, index) in details"
        :key="index"
        class="contact-item d-flex align-center pa-3 mb-4"
      >
        <div class="icon-box mr-4">
          <v-icon :icon="detail.icon" :dynamic-icon="detail['dynamic-icon']" color="primary" size="small" />
        </div>
        <div class="flex-grow-1 overflow-hidden">
          <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold letter-spacing-1">
            {{ detail.title }}
          </div>
          <div class="text-subtitle-2 text-truncate font-weight-medium">
            {{ detail.value }}
          </div>
        </div>
        <v-btn
          v-if="detail.link"
          icon="open_in_new"
          variant="text"
          color="primary"
          size="x-small"
          :href="detail.link"
          target="_blank"
        />
      </div>
    </div>

    <v-divider class="my-6" opacity="0.1" />

    <div class="d-flex justify-center ga-4">
      <v-btn
        variant="tonal"
        color="primary"
        href="https://github.com/Sudip969"
        target="_blank"
        class="social-btn"
      ><v-icon icon="fab fa-github" dynamic-icon="true"/></v-btn>
      <v-btn
        variant="tonal"
        color="primary"
        href="https://www.linkedin.com/in/sudipta-jena-53a001252"
        target="_blank"
        class="social-btn"
      ><v-icon icon="fab fa-linkedin" dynamic-icon="true"/></v-btn>
      <v-btn
        variant="tonal"
        color="primary"
        class="social-btn"
      ><v-icon icon="fab fa-twitter" dynamic-icon="true"/></v-btn>
    </div>
  </div>
</template>

<script>
import ProfilePhoto from "./profile-photo.vue";

export default {
  name: "personal-details",
  components: {
    ProfilePhoto,
  },
  data() {
    return {
      details: [
        {
          title: "LinkedIn",
          value: "Sudipta Jena",
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/sudipta-jena-53a001252",
          'dynamic-icon': true,
        },
        {
          title: "Email",
          value: "sudipta2k@gmail.com",
          icon: "mail",
          link: "mailto:sudipta2k@gmail.com",
        },
        {
          title: "Location",
          value: "Hyderabad, Telangana",
          icon: "location_on",
        },
        {
          title: "Phone",
          value: "+91 6370533969",
          icon: "call",
          link: "tel:+916370533969",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, var(--primary-accent), #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}

.contact-item {
  background: rgba(var(--v-theme-primary), 0.03);
  border-radius: 16px;
  border: 1px solid rgba(var(--v-theme-primary), 0.05);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(var(--v-theme-primary), 0.1);
  transform: translateX(8px);
  border-color: rgba(var(--v-theme-primary), 0.2);
}

.icon-box {
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.dark-mode .icon-box {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.letter-spacing-1 {
  letter-spacing: 1px !important;
}

.social-btn {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-btn:hover {
  transform: translateY(-5px) scale(1.15);
  background: var(--primary-accent) !important;
  color: white !important;
}
</style>
