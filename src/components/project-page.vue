<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <NuxtLink to="/weather-app" class="text-decoration-none">
          <v-card>
            <v-row>
              <v-col cols="2"> <v-img src="/images/logo.png"></v-img></v-col>
              <v-col cols="10">
                <v-card-title> Test Project </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit veritatis soluta hic recusandae minima beatae dolor
                  laboriosam delectus dolore asperiores, possimus eaque natus!
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
