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
<section class="bg-white md:px-12 p-4" id="investment">
    <h3 class="text-[24px] text-center text-text-theme font-bold segoe mx-auto md:w-2/4 mb-4">
        Investment Vehicles
    </h3>
    <Slider />
</section>

<section class="grid md:grid-cols-2 justify-items-center items-center py-8 px-6 md:px-[57px] md:pb-[80px]">
    <div class="w-[65%] hidden md:block">
        <img src="public/assets/images/easy-housing.png" class="w-screen h-[100%]"/>
    </div>
    <div class="space-y-2 w-100">
        <h3 class="segoe text-text-theme text-[24px] md:text-[32px] font-semibold">Easy Housing</h3>
        <p class="font-poppins text-black-900 md:w-[70%] font-normal text-[14px] my-4 text-jutify">The Easy housing Scheme is an innovative program toward solving the housing deficit in Nigeria using the SDGs Global goals standards. The Easy housing Scheme in an integrated system of proving affordable housing and Agriculture programs towards proving a good livelihood.</p>
    </div>
</section>
<section class="grid md:grid-cols-2 justify-items-center items-center py-8 px-6 md:px-[57px] md:pb-[80px]">
    <div class="w-[65%] hidden md:block">
        <img src="public/assets/images/wwd.svg" class="w-screen h-[100%]"/>
    </div>
    <div class="space-y-2 w-100">
        <h3 class="segoe text-text-theme text-[24px] md:text-[32px] font-semibold">Property Management</h3>
        <p class="font-poppins text-black-900 md:w-[70%] font-normal text-[14px] my-4 text-jutify">Property management involves overseeing and managing residential, commercial, or industrial properties on behalf of property owners. It encompasses various tasks related to property maintenance. tenant relations, and financial management.
        </p>
    </div>
</section>
<section class="bg-gray-theme md:p-[6.5%] p-4" id="offers">
        <h3 class="text-[19px] md:text-[26px] text-center text-gray-2 font-bold font-Mt mx-auto md:w-2/5">
            Reviews From Our Clients
        </h3>
    <div class="grid md:grid-cols-3 gap-2 mt-[5%] justify-items-center">
        <div class="flex flex-col items-center text-center bg-gradient-to-t from-[#063d6f] to-[#091e31] text-white shadow-lg rounded-[15px] px-8 py-10 space-y-5  w-[90%]">
            <p class="h-[80%]">"The services so far have been fantastic! I can't wait for 18 months to enable me to move into my new apartment!"
                </p>
            <div class="h-[20%]">
                <p>Mr Paul Oseyi Oriwoh</p>
                <p>Client</p>
            </div>
        </div>
        <div class="flex flex-col items-center text-center bg-gradient-to-t from-[#063d6f] to-[#091e31] text-white shadow-lg rounded-[15px] px-8 py-10 space-y-5  w-[90%]">
            <p class="h-[80%]">"I have been privileged to work where a lot of developers are reported for fraud and other vices, Mshel has NEVER been one on my register. I was very satisfied with my purchase!"
                </p>
            <div class="h-[20%]">
                <p>Mustapha Sulaiman</p>
                <p>Client</p>
            </div>
        </div>
        <div class="flex flex-col items-center text-center bg-gradient-to-t from-[#063d6f] to-[#091e31] text-white shadow-lg rounded-[15px] px-8 py-10 space-y-5  w-[90%]">
            <p class="h-[80%]">"I couldn't be more impressed from buying a property with your company and I am more likely to buy more!"
                </p>
            <div class="h-[20%]">
                <p>Oghani Joel Elo</p>
                <p>Client</p>
            </div>
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
