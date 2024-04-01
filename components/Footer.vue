<template>
      <footer class="">
        <div class="mx-auto w-full max-w-screen-xl py-6 lg:py-10">
            <div class="items-center justify-items-center">
                <img src="public/assets/images/Logo1.png" class="h-[50px] m-auto" alt="logo" />
                <div class="flex flex-row gap-[25px] justify-center my-6">
                    <a href="https://www.instagram.com/sunset_realtors">
                        <img src="public/assets/images/insta-icon.svg" class="h-[25px]" />
                    </a>
                    <a class="https://twitter.com/broker_sunset?t=07Nj3WYKpGInESMut5Einw&s=09s">
                        <img src="public/assets/images/twitter-icon.svg" class="h-[25px]" />
                    </a>
                    <a href="https://www.facebook.com/Sunset-Brokers-103757771898576">
                     <img src="public/assets/images/facebook.svg" class="h-[25px]" />
                    </a>
                </div>
                <p class="font-inter text-[12px] font-[300] text-gray-theme2 sm:text-center">
                    All rights reserved @  sunsetbrokers {{ currentYear }}
                </p>
                <p class="font-inter text-[12px] font-[300] text-gray-theme2 sm:text-center">
                    By accessing and using this page you agree to the Terms & Condition and the Privacy Policy of sunset brokers.
                </p>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup>
    const currentYear = new Date().getFullYear();
</script>
