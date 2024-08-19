<template>
    <nav
      ref="navbar"
      id="navigation"
      class="bg-black py-4 sm:px-0 md:px-0 md:py-2 fixed top-0 left-0 w-full z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500 border-b border-200"
    >
      <div class="flex items-center justify-between flex-wrap max-w-7xl mx-auto px-2 md:px-0">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
          <img
            src="public/assets/images/Logo1.png"
            class="h-[40px] md:h-[30px] w-auto"
            alt="logo"
            title="Go Home"
          />
        </NuxtLink>
  
        <!-- Mobile Menu Button -->
        <div class="block md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center border p-1 rounded text-grayTheme-400 border-400 hover:border-white focus:border-white hover:text-black focus:text-black focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleVisibility"
          >
            <span class="sr-only">Open main menu</span>
  
            <svg
              v-if="!isVisible"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="white"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
  
            <svg
              v-if="isVisible"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="white"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
  
        <!-- Desktop Menu -->
        <div
          :class="{
            'hidden': !isVisible,
            'absolute': isVisible,
            'block': isVisible,
          }"
          class="top-full left-0 w-full bg-black md:relative md:flex md:w-auto md:ml-10 md:items-center"
        >
          <div
            class="flex flex-col md:flex-row gap-8 p-4 pb-0 md:p-0 md:mt-0 font-lt font-light normal text-lt-base text-white"
          >
            <NuxtLink to="/" class="block hover:border-b-2 hover:border-primary-theme">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="block hover:border-b-2 hover:border-primary-theme">
              About Us
            </NuxtLink>
            <a href="#investment" class="block hover:border-b-2 hover:border-primary-theme">
              Investment Vehicles
            </a>
            <a href="/#offers" class="block hover:border-b-2 hover:border-primary-theme">
              Offers
            </a>
            <a href="#demo" class="block hover:border-b-2 hover:border-primary-theme">
              Investors Club
            </a>
            <a href="#contact" class="block hover:border-b-2 hover:border-primary-theme">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  
  // Emit the navbar height
  const emit = defineEmits(['update:navbarHeight']);
  const isVisible = ref(false);
  const navbar = ref<HTMLElement | null>(null);
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  
  onMounted(() => {
    if (navbar.value) {
      emitHeight();
    }
  });
  
  watch(isVisible, () => {
    emitHeight();
  });
  
  const emitHeight = () => {
    if (navbar.value) {
      const height = navbar.value.offsetHeight;
      emit('update:navbarHeight', height);
    }
  };
  </script>
  