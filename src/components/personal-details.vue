<template>
  <v-container>
    <div>
      <span class="d-flex flex-column align-center mb-4">
        <profile-photo></profile-photo>
        <v-card-title class="pb-0">Sudipta Jena </v-card-title>
        <v-card-subtitle class="">Full Stack Developer </v-card-subtitle>
      </span>
      <v-divider />
      <v-card-item class="px-0">
        <v-row>
          <v-col
            v-for="(detail, index) in details"
            :key="index"
            cols="12"
            sm="6"
            md="12"
            lg="12"
          >
            <v-row>
              <!-- Icon -->
              <v-col cols="3">
                <p-chip size="large">
                  <v-icon
                    class="text-primary"
                    :icon="detail.icon"
                    :dynamic-icon="true"
                  />
                </p-chip>
              </v-col>

              <!-- Text -->
              <v-col cols="9" class="d-flex flex-column">
                <span class="pb-0 text-body-2 text-grey">
                  {{ detail.title }}
                </span>
                <span class="text-subtitle-2">
                  {{ detail.value }}
                  <NuxtLink
                    v-if="detail.link"
                    :to="detail.link"
                    target="_blank"
                  >
                    <v-icon icon="open_in_new" size="small" color="primary" />
                  </NuxtLink>
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-item>
    </div>
  </v-container>
</template>

<script>
import PChip from "../common/p-chip.vue";
import ProfilePhoto from "./profile-photo.vue";

export default {
  name: "personal-details.vue",
  components: {
    ProfilePhoto,
    PChip,
  },
  data() {
    return {
      details: [
        {
          title: "LinkedIn",
          value: "Sudipta Jena",
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/sudipta-jena-53a001252",
        },
        {
          title: "E-mail",
          value: "sudipta2k@gmail.com",
          icon: "mail",
          link: "mailto:sudipta2k@gmail.com",
        },
        {
          title: "Address",
          value: "Gandhinagar, Gujurat",
          icon: "location_on--filled",
        },
        {
          title: "Phone Number",
          value: "6370533969",
          icon: "call",
        },
      ],
    };
  },
};
</script>
