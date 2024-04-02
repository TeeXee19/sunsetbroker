<template>
<section class="grid md:grid-cols-2 sm:grid-cols-1  items-center py-8 px-6 md:px-[57px] space-y-4 md:pb-[80px]">
    <div class="space-y-2 md:mx-[20px] w-[100%] md:p-2">
        <h3 class="segoe text-text-theme text-[24px] lg:text-[48px] xl:text-6xl font-bold">Sunset Realtors</h3>
        <p class="font-poppins text-black lg:w-3/4 xl:w-4/6 font-light text-[14px] text-justify my-4">We exist to provide world-class real estate’s services in the area of our core competence leaving our clients happy, knowing that we helped them to create sustainable generational wealth.</p>
        <button class="btn bg-primary-theme rounded-[4px] py-2 px-6 text-white font-poppins">Book a free appointment</button>
    </div>
    <div class="w-[75%] hidden md:block">
        <img src="public/assets/images/hero.svg" class="w-screen h-[100%]"/>
    </div>
</section>

<WhatWeDo />

<MCV />
<section class="bg-white md:px-12 p-4" id="investment">
    <h3 class="text-[24px] text-center text-text-theme font-bold segoe mx-auto md:w-2/4 mb-4">
        Investment Vehicles
    </h3>
    <Slider />
</section>
<section class="bg-gray-theme md:p-[6.5%] p-4" id="offers">
        <h3 class="text-[19px] md:text-[26px] text-center text-gray-2 font-bold font-Mt mx-auto md:w-2/5">
            Percentage Share Ownership Mutual Funds Investment
        </h3>
    <div class="grid md:grid-cols-4 gap-2 mt-[5%] justify-items-center">
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-8 py-8 space-y-5 h-fit  w-[90%]">
            <h3 class="font-bold text-[48px] text-primary-theme">2M</h3>
            <p>Investment group sold out</p>
            <button class="btn py-2 px-4 bg-btn-theme text-white" disabled>Sold Out</button>
        </div>
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-8 py-8 space-y-5 h-fit w-[90%]">
            <h3 class="font-bold text-[48px] text-primary-theme">2.5M</h3>
            <p>Investment group sold out</p>
            <button class="btn py-2 px-4 bg-btn-theme text-white" disabled>Sold Out</button>
        </div>
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-15 py-5 space-y-5 w-[90%]">
            <h3 class="font-bold text-[48px] text-primary-theme">3.5M</h3>
            <ul class="text-justify font-poppins text-[16px]">
                <li>25% - 875,000</li>
                <li>50% - 1,750,000</li>
                <li>75% - 2,625,000</li>
                <li>100% - 3,500,00</li>
            </ul>
            <button class="btn py-2 px-4 bg-primary-theme text-white hover:rounded-md hover:bg-primary-2 hover:text-text-theme hover:font-bold">Join Now</button>
        </div>
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-15 py-5 space-y-5 w-[90%]">
            <h3 class="font-bold text-[48px] text-primary-theme">4.5M</h3>
            <ul class="text-justify font-poppins text-[14px]">
                <li>25% - 1,125,000</li>
                <li>50% - 2,250,000</li>
                <li>75% - 3,375,000</li>
                <li>100% - 4,500,000</li>
            </ul>
            <button class="btn py-2 px-4 bg-primary-theme text-white hover:rounded-md hover:bg-primary-2 hover:text-text-theme hover:font-bold">Join Now</button>
        </div>
    </div>  
</section>

<section class="bg-white md:p-12 p-4">
        <h3 class="text-[18px] md:text-[24px] text-center text-text-theme font-bold segoe mx-auto md:w-2/4">
            FREQUENTLY ASKED QUESTIONS
        </h3>
    <div class="w-[75%] items-center justify-items-center mx-auto">
        <FAQ class="my-[15%]"/>
    </div>
</section>
<section class="bg-gray-theme md:p-12 p-4" id="contact">
    <div class="text-center segoe">
        <h3 class="text-lg text-text-theme font-bold">
            CONTACT US TODAY
        </h3>
        <p>Contact us today and get started on amazing investment offers</p>
    </div>
    <div class="grid md:grid-cols-3 mt-[5%] space-y-[5%]">
        <div class="flex flex-col items-center text-center">
            <div class="flex flex-row space-x-2">
                <img src="public/assets/images/location.svg" class="md:h-[25px]"/>
                <h3 class="font-bold text-[14px]">Address</h3>
            </div>
            <NuxtLink to="https://maps.app.goo.gl/W9VAPME6Zz24GYhx9" class="w-[65%] hover:text-primary-theme">
                No. 7 Deen and Miyls Plaza. River Park Estate, Lugbe FCT Abuja.
            </NuxtLink>
        </div>
        <div class="flex flex-col items-center text-center">
            <div class="flex flex-row space-x-2 h-fit">
                <img src="public/assets/images/phone.svg" class="md:h-[20px]"/>
                <h3 class="font-bold text-[14px]">Mobile</h3>
            </div>
            <NuxtLink to="tel://+2348102981776" class="w-[65%] hover:text-primary-theme">
                +234 (810) 298 1776
            </NuxtLink>
        </div>
        
        <div class="flex flex-col items-center text-center">
            <div class="flex flex-row space-x-2 h-fit">
                <img src="public/assets/images/email.svg" class="md:h-[25px]"/>
                <h3 class="font-bold text-[14px]">Email</h3>
            </div>
            <NuxtLink to="mailto://sunsetbrokersinfo@gmail.com" class="w-[65%] hover:text-primary-theme">
                sunsetbrokersinfo@gmail.com
            </NuxtLink>
        </div>
    </div>  
</section>
</template>

<script lang="ts" setup>

</script>
