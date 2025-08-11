<template>
  <v-container>
    <div>
      <v-card-title class="pb-0">Sudipta Jena</v-card-title>
      <v-card-subtitle class="">Full Stack Developer </v-card-subtitle>
      <v-divider />
      <v-card-item>
        <v-row v-for="(detail, index) in details" :key="index">
          <v-col col="3">
            <p-chip size="large">
              <v-icon
                class="text-primary"
                :icon="detail.icon"
                :dynamic-icon="true"
              ></v-icon>
            </p-chip>
          </v-col>
          <v-col cols="9" class="d-flex flex-column">
            <span class="pb-0 text-body-2 text-grey">{{ detail.title }}</span>
            <span class="text-subtitle-2"
              >{{ detail.value }}
              <NuxtLink v-if="detail.link" :to="detail.link" target="_blank">
                <v-icon icon="open_in_new" size="small" color="primary" />
              </NuxtLink>
            </span>
          </v-col>
        </v-row>
      </v-card-item>
    </div>
  </v-container>
</template>

<script>
import PChip from "../common/p-chip.vue";
export default {
  components: {
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
