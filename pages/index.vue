<template>
<section class="grid grid-cols-2 justify-items-center items-center py-8 px-6 md:px-[57px] space-y-4 pb-[80px]">
    <div class="space-y-2 mx-[20px]">
        <h3 class="segoe text-text-theme lg:text-[48px] xl:text-7xl font-bold">Sunset Realtors</h3>
        <p class="font-poppins text-black lg:w-3/4 xl:w-4/6 font-light text-[18px] text-justify my-4">We exist to provide world-class real estate’s services in the area of our core competence leaving our clients happy, knowing that we helped them to create sustainable generational wealth.</p>
        <button class="btn bg-primary-theme rounded-[4px] py-2 px-6 text-white font-poppins">Book a free appointment</button>
    </div>
    <div class="w-[80%] hidden md:block">
        <img src="public/assets/images/hero.svg" class="w-screen h-[100%]"/>
    </div>
</section>

<section class="grid grid-cols-2 justify-items-center items-center py-8 md:px-[57px] pb-[80px]">
    <div class="w-[80%]">
        <img src="public/assets/images/wwd.svg" class="w-screen h-[100%]"/>
    </div>
    <div class="space-y-2">
        <h3 class="segoe text-text-theme text-[64px] font-bold">What We Do</h3>
        <p class="font-poppins text-black-900 w-[70%] font-normal text-[18px] my-4">Sunset Realtors is a real estate brokerage cooperative company that provides services to clients with interested in real estate with our available plans, through land banking and Cooperative joint projects, to create wealth and asset in real estate. We welcome clients from every sphere of life and vocation to join our wealth creation vehicles.</p>
    </div>
</section>

<section class="grid grid-cols-3 justify-items-center items-center py-8 px-2 md:px-2 space-y-4 pb-[80px] mx-[5%] gap-4">
    <div class="rounded-tl-[64px] rounded-br-[64px] border border-2 border-primary-theme space-y-2 text-center justify-center py-8 px-3 w-[90%] flex flex-col bg-white shadow-lg h-[300px]">
        <img src="public/assets/images/mission.svg" class="h-[50px]"/>
        <h3 class="segoe text-text-theme text-[32px] font-normal">Mission</h3>
        <p class="text-black font-normal text-[18px] text-center my-4 font-poppins">To provide our customers services in creating good investment portfolio and in creating generational wealth with ease, through Real Estate.</p>
    </div>
    <div class="rounded-tl-[64px] rounded-br-[64px] border border-2 border-primary-theme space-y-2 text-center justify-center py-8 px-3 w-[90%] flex flex-col bg-primary-theme shadow-lg h-[300px]">
        <img src="public/assets/images/core-rule.svg" class="h-[50px]"/>
        <h3 class="segoe text-white text-[32px] font-normal">Core Value</h3>
        <ul class="text-white font-normal text-[18px] text-center my-4 font-poppins list-disc list-inside">
            <li>Integrity</li> 
            <li>Diligent to wealth creation</li> 
            <li>Diversity to Real estate investment</li>
            <li>Committed to customer growth</li>
        </ul>
    </div>
    <div class="rounded-tl-[64px] rounded-br-[64px] border border-2 border-primary-theme space-y-2 text-center justify-center py-8 px-3 w-[90%] flex flex-col bg-white shadow-lg h-[300px]">
        <img src="public/assets/images/vision.svg" class="h-[50px]"/>
        <h3 class="segoe text-text-theme text-[32px] font-normal">Vision</h3>
        <p class="text-black font-normal text-[18px] text-center my-4 font-poppins">To be trusted partners in Real Estate investment.</p>
    </div>
</section>
<section class="bg-white md:p-12 p-4">
    <h3 class="text-[24px] text-center text-text-theme font-bold segoe mx-auto w-2/4">
        FREQUENTLY ASKED QUESTIONS
    </h3>
    <Slider />
</section>
<section class="bg-gray-theme md:p-[6.5%] p-4">
        <h3 class="text-[36px] text-center text-gray-2 font-semibold font-Mt mx-auto w-2/5">
            Percentage Share Ownership Mutual Funds Investment
        </h3>
    <div class="grid grid-cols-4 mt-[5%] justify-items-center">
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-8 py-8 space-y-5 h-fit  w-[90%]">
            <h3 class="font-bold text-[48px] text-primary-theme">2M</h3>
            <p>Investment group sold out</p>
            <button class="btn py-2 px-4 bg-btn-theme text-white">Sold Out</button>
        </div>
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-8 py-8 space-y-5 h-fit w-[90%]">
            <h3 class="font-bold text-[48px] text-primary-theme">2.5M</h3>
            <p>Investment group sold out</p>
            <button class="btn py-2 px-4 bg-btn-theme text-white">Sold Out</button>
        </div>
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-20 py-5 space-y-5 w-[90%]">
            <h3 class="font-bold text-[62px] text-primary-theme">3.5M</h3>
            <ul class="text-justify font-poppins text-[16px]">
                <li>25% - 875,000</li>
                <li>50% - 1,750,000</li>
                <li>75% - 2,625,000</li>
                <li>100% - 3,500,00</li>
            </ul>
            <button class="btn py-2 px-4 bg-primary-theme text-white">Join Now</button>
        </div>
        <div class="flex flex-col items-center text-center bg-white shadow-lg rounded-[15px] px-20 py-5 space-y-5 w-[90%]">
            <h3 class="font-bold text-[62px] text-primary-theme">4.5M</h3>
            <ul class="text-justify font-poppins text-[14px]">
                <li>25% - 1,125,000</li>
                <li>50% - 2,250,000</li>
                <li>75% - 3,375,000</li>
                <li>100% - 4,500,000</li>
            </ul>
            <button class="btn py-2 px-4 bg-primary-theme text-white">Join Now</button>
        </div>
    </div>  
</section>

<section class="bg-white md:p-12 p-4">
        <h3 class="text-[24px] text-center text-text-theme font-bold segoe mx-auto w-2/4">
            FREQUENTLY ASKED QUESTIONS
        </h3>
    <div class="w-[75%] items-center justify-items-center mx-auto">
        <FAQ class="my-[15%]"/>
    </div>
</section>
<section class="bg-gray-theme md:p-12 p-4">
    <div class="text-center segoe">
        <h3 class="text-lg text-text-theme font-bold">
            CONTACT US TODAY
        </h3>
        <p>Contact us today and get started on amazing investment offers</p>
    </div>
    <div class="grid grid-cols-3 mt-[5%]">
        <div class="flex flex-col items-center text-center">
            <div class="flex flex-row space-x-2">
                <img src="public/assets/images/location.svg" class="h-[25px]"/>
                <h3 class="font-bold text-[18px]">Address</h3>
            </div>
            <NuxtLink to="https://maps.app.goo.gl/W9VAPME6Zz24GYhx9" class="w-[65%]">
                No. 7 Deen and Miyls Plaza. River Park Estate,Lugbe FCT Abuja.
            </NuxtLink>
        </div>
        <div class="flex flex-col items-center text-center">
            <div class="flex flex-row space-x-2 h-fit">
                <img src="public/assets/images/phone.svg" class="h-[20px]"/>
                <h3 class="font-bold text-[18px]">Mobile</h3>
            </div>
            <NuxtLink to="tel://+2348102981776" class="w-[65%]">
                +234 810 298 1776
            </NuxtLink>
        </div>
        
        <div class="flex flex-col items-center text-center">
            <div class="flex flex-row space-x-2 h-fit">
                <img src="public/assets/images/email.svg" class="h-[25px]"/>
                <h3 class="font-bold text-[18px]">Email</h3>
            </div>
            <NuxtLink to="mailto://sunsetbrokersinfo@gmail.com" class="w-[65%]">
                sunsetbrokersinfo@gmail.com
            </NuxtLink>
        </div>
    </div>  
</section>
</template>

<script lang="ts" setup>

</script>
