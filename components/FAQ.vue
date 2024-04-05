<template>
  <div v-for="(accordion, index) in accordions" :key="index">
         <accord :heading="accordion.title" :description="accordion.description" :status="accordionStatus[index]"
     @toggleAccordion="toggleAccordion(index)"/>
 </div>
</template>
<script lang="ts" setup>
 const accordions = [
 { 
     title: 'What is the minimum amount to invest?',
     description: 'N650k'
 },{ 
     title: 'What is the time duration for the ROI?',
     description: '12 to 24months base on the type of investment package'
 },{ 
     title: 'Locations of land and properties?',
     description: 'FCT, Abuja and Adamawa states. <br/> Abuja FCT: Airport road Lugbe, Lifecamp, Kiyami, IDU, Jahi.'
 },{ 
     title: 'Can I invest with a friend?',
     description: 'Yes, you can invest with friends and family.'
 }
];

const accordionStatus = ref(
accordions.map(() => ({ open: false }))
);

const toggleAccordion = (index: number) => {
accordionStatus.value[index].open = !accordionStatus.value[index].open;

accordionStatus.value.forEach((item, i) => {
 if (i !== index) {
   item.open = false;
 }
});
};
</script>