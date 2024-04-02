<template>
    <div
      data-active-classes="bg-white text-black border-l-[10px] border-primary-theme boxShadow-custom"    >
      <h2>
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 px-3 font-bold font-dm text-dm-lg text-left text-primary-theme border-l-[6px] border-b-[1px] border-b-grey-900 border-l-primary-theme my-[50px] shadow-customButtonShadow"
          @click="toggleAccordion"
        >
          <span class="text-black font-lt text-[18px]">{{ heading }}</span>
          <svg width="22" height="21" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :d="!status.open ? 'M20.4286 8.25H13.3571V1.5C13.3571 0.671719 12.6534 0 11.7857 0H10.2143C9.34656 0 8.64286 0.671719 8.64286 1.5V8.25H1.57143C0.703705 8.25 0 8.92172 0 9.75V11.25C0 12.0783 0.703705 12.75 1.57143 12.75H8.64286V19.5C8.64286 20.3283 9.34656 21 10.2143 21H11.7857C12.6534 21 13.3571 20.3283 13.3571 19.5V12.75H20.4286C21.2963 12.75 22 12.0783 22 11.25V9.75C22 8.92172 21.2963 8.25 20.4286 8.25Z' : 'M21.3571 0.75H13.9643L13.2506 0.750442C12.5 0.749756 12.2926 0.750338 11.3854 0.750338C10.4783 0.750338 11 0.750137 9.03571 0.75H1.64286C0.735692 0.75 0 1.42172 0 2.25V3.75C0 4.57828 0.735692 5.25 1.64286 5.25H9.03571H9.90858C9.35257 5.25 10.7792 5.25 11.6864 5.25H12.7383C13.6455 5.25 13 5.25 13.9643 5.25H21.3571C22.2643 5.25 23 4.57828 23 3.75V2.25C23 1.42172 22.2643 0.75 21.3571 0.75Z'" fill="#FFA800"/>
            </svg>
        </button>
      </h2>
      <div :class="{ 'hidden': !status.open, 'block': status.open }">
        <div class="py-7 md:py-8 px-3 -mt-[50px] !bg-white shadow border-l-[6px] border-b-1 border-y-grey-700 border-primary-theme">
          <p class="mb-2 font-dm text-dm-md !text-black" v-html="description"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  interface Props {
    heading: string;
    description: string;
    status: { open: boolean };
  }
  
  const { heading, description, status } = defineProps<Props>();
  
  const toggleAccordion = () => {
    status.open = !status.open;
  };
  </script>
  