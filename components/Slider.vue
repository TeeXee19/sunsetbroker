<template>
<div class="">
    <div>
        <div v-if="activeTab === 'Inv'" class="grid grid-cols-3 gap-[4%] justify-items-center items-center py-8 md:px-[57px] pb-[80px]">
            <div class="col-span-1 justify-self-end">
                <img src="public/assets/images/RETI.svg" class=" h-[100%]" />
            </div>
            <div class="col-span-2 space-y-2">
                <h3 class="font-Mt text-text-theme text-[24px] font-bold">Real estate trust-investors</h3>
                <p class="font-poppins text-black-900 w-[67%] font-light text-[16px] my-4 text-left">The real estate Trust-investors are group of investors ready to build an estate affiliated to their names as cooperates investors. The Trust-investors are group of members ready to build a legacy and create wealth in real estate. The Trust-investors’ security is sealed with a deed of trust to work as limited partners with Sunset Realtors. Each member of the Trust Investors has a right of ownership by percentage shareholding.</p>

                <div class="mt-[15%]">
                    <button class="btn bg-primary-theme p-3 text-white">Order Now</button>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'Inv2'" class="grid grid-cols-3 gap-[4%] justify-items-center items-center py-8 md:px-[57px] pb-[80px]">
            <div class="col-span-1 justify-self-end">
                <img src="public/assets/images/REIG.svg" class=" h-[100%]" />
            </div>
            <div class="col-span-2 space-y-2">
                <h3 class="font-Mt text-text-theme text-[24px] font-bold">REAL ESTATE INVESTMENT GROUP</h3>
                <p class="font-poppins text-black-900 w-[67%] font-light text-[16px] my-4 text-left">The real estate investment group is an investment vehicle that provides clients with opportunity to invest in building projects as joint investors. Projects such as malls, hotels, single residential or block of flats to create an asset as joint investors in real estate. Under this group, the cooperative members build to generate passive income through rentals or wholesaling. Right to ownership by percentage shareholdings.</p>

                <div class="mt-[15%]">
                    <button class="btn bg-primary-theme p-3 text-white">Order Now</button>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'Inv3'" class="grid grid-cols-3 gap-[4%] justify-items-center items-center py-8 md:px-[57px] pb-[80px]">
            <div class="col-span-1 justify-self-end">
                <img src="public/assets/images/REMF.svg" class=" h-[100%]" />
            </div>
            <div class="col-span-2 space-y-2">
                <h3 class="font-Mt text-text-theme text-[24px] font-bold">REAL ESTATE MUTUAL FUNDS</h3>
                <p class="font-poppins text-black-900 w-[67%] font-light text-[16px] my-4 text-left">The mutual funds investment, also known as the land banking. It also referred to as the “buy and hold investment”. This investment gives clients opportunity to leverage on land presales. Client can own a share percentage of a land as shareholders with a minimum of 25% price value of that land. Owning a property with friends and family to generate passive income. Group of 2 to 4 friends or family members can subscribe to our Walk in Wealth plan and own a property for passive income.</p>

                <div class="mt-[15%]">
                    <button class="btn bg-primary-theme p-3 text-white">Order Now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-between  px-6 py-3 h-fit">
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
          <img src="public/assets/images/backward.svg" class="h-[50px]" :class="{'hidden': activeTab === 'Inv'}" @click="navigateTab('backward')"/>
          <img src="public/assets/images/forward.svg" class="h-[50px]" @click="navigateTab('forward')"/>
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
