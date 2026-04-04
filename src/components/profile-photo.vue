<template>
  <div class="profile-photo-container mb-4">
    <div class="avatar-gradient">
      <v-avatar size="160" class="elevation-10">
        <v-img :src="`${config.app.baseURL}images/Dp.jpg`" cover alt="Sudipta Jena" />
      </v-avatar>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>

<style scoped>
.profile-photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.avatar-gradient {
  padding: 6px;
  background: linear-gradient(135deg, var(--primary-accent), var(--secondary-accent));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
}

.avatar-gradient:hover {
  transform: scale(1.05) rotate(3deg);
  box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.6);
}

.v-avatar {
  border: 4px solid white;
}

.dark-mode .v-avatar {
  border: 4px solid var(--glass-bg-dark);
}
</style>
