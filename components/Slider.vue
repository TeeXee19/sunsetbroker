<template>
<div class="">
    <div>
        <div v-if="activeTab === 'Inv'" class="grid md:grid-cols-3 gap-[4%] justify-items-center items-center py-[3%] md:px-[57px]">
            <div class="col-span-1 justify-self-end hidden md:block">
                <img src="public/assets/images/RETI.svg" class=" h-[100%]" />
            </div>
            <div class="col-span-2 space-y-[12%]">
                <div>
                    <h3 class="font-Mt text-text-theme text-[20px] md:text-[24px] font-bold">Mutual Funds</h3>
                    <p class="font-poppins text-black-900 md:w-[90%] font-light text-[14px] my-4 text-left h-fit">The Mutual Funds also known  as land banking allow customers to buy a landed property with friends and family’s as Fractional investors with each having a 25% share ownership of that property with the purpose of resealing for profit making, with a minimum of 2 and maximum of 4 members on a plot.</p>
                </div>
                <div class="">
                    <button class="btn bg-primary-theme p-3 text-white">Order Now</button>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'Inv2'" class="grid md:grid-cols-3 gap-[4%] justify-items-center items-center py-[3%] md:px-[57px]">
            <div class="col-span-1 justify-self-end hidden md:block">
                <img src="public/assets/images/REIG.svg" class=" h-[100%]" />
            </div>
            <div class="col-span-2 space-y-[12%]">
                <div>
                    <h3 class="font-Mt text-text-theme text-[20px] md:text-[24px] font-bold">Group Investment Vehicle</h3>
                    <p class="font-poppins text-black-900 md:w-[67%] font-light text-[14px] my-4 text-left">GROUP INVESTMENT gives opportunities for those that build to flip. They can leverage on this vehicle and diversify their seed capital investment with just paying 25% to 50% cost of construction to generate income after property is sold off. A single project can be owned by multiple investors with the same or similar interest.</p>
                </div>

                <div>
                    <NuxtLink to="/#contact" class="btn bg-primary-theme p-3 text-white">Order Now</NuxtLink>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'Inv3'" class="grid md:grid-cols-3 gap-[4%] justify-items-center items-center py-[3%] md:px-[57px]">
            <div class="col-span-1 justify-self-end hidden md:block">
                <img src="public/assets/images/REMF.svg" class=" h-[100%]" />
            </div>
            <div class="col-span-2 space-y-[12%]">
                <div>
                    <h3 class="font-Mt text-text-theme text-[18px] md:text-[24px] font-bold">Trust Investors</h3>
                    <p class="font-poppins text-black-900 md:w-[67%] font-light text-[14px] my-4 text-left">TRUST-INVESTORS are known to be landlords. They are clients with interest to own a property for the purpose of getting returns through rentals cash flow, With this vehicle. a client can pay just 25% to 50% cost value of a property and begin to generate returns through rentals, which is proportional to what the client invested on the property.</p>
                </div>
                
                <div>
                    <button class="btn bg-primary-theme p-3 text-white">Order Now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-between px-6 h-fit">
        <nav>
            <ul class="flex gap-3">
                <li @click="setActiveTab('Inv')">
                    <img :src="activeTab === 'Inv' ? `assets/images/filled-dot.svg` : `assets/images/unfilled-dot.svg`" class="h-[14px]" />
                </li>
                <li @click="setActiveTab('Inv2')">
                    <img :src="activeTab === 'Inv2' ? 'assets/images/filled-dot.svg' : 'assets/images/unfilled-dot.svg'" class="h-[14px]" />
                </li>
                <li @click="setActiveTab('Inv3')">
                    <img :src="activeTab === 'Inv3' ? 'assets/images/filled-dot.svg' : 'assets/images/unfilled-dot.svg'" class="h-[14px]" />
                </li>
            </ul>
        </nav>
        <div class="flex gap-6">
          <img src="public/assets/images/backward.svg" class="h-[30px] cursor-pointer" :class="{'hidden': activeTab === 'Inv'}" @click="navigateTab('backward')"/>
          <img src="public/assets/images/forward.svg" class="h-[30px] cursor-pointer" @click="navigateTab('forward')"/>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
const tabOrder = ['Inv', 'Inv2', 'Inv3'];
let currentIndex = 0;

const activeTab = ref < string > ('Inv');

function setActiveTab(tab: string) {
    activeTab.value = tab;
}

const autoToggleTab = () => {
    const nextTab = tabOrder[currentIndex];
    setActiveTab(nextTab);
    currentIndex = (currentIndex + 1) % tabOrder.length;
    setTimeout(autoToggleTab, 5000);
};

function navigateTab(direction: string) {
  const currentIndex = tabOrder.indexOf(activeTab.value);

  if (direction === 'forward') {
    const nextIndex = (currentIndex + 1) % tabOrder.length;
    setActiveTab(tabOrder[nextIndex]);
  } else if (direction === 'backward') {
    const prevIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length;
    setActiveTab(tabOrder[prevIndex]);
  }
}
</script>
