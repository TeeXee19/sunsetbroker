<template>
  <div>
    <NuxtLayout>
      <Navbar @update:navbarHeight="updateNavbarHeight" />

      <div :style="{ marginTop: navbarHeight + 'px' }">
        <NuxtPage  />
      </div>
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue'; // Adjust the path as necessary

// State to hold the navbar height
const navbarHeight = ref(0);

// Update function to adjust the margin based on navbar height
const updateNavbarHeight = (height: number) => {
  navbarHeight.value = height;
};
</script>
