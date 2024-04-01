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
     description: ' Minimum amount varies based on available plan as at time of investment.'
 },{ 
     title: 'Location of land and properties?',
     description: 'FCT, Abuja. Lugbe Airport Road, Kiyami, Jahi.'
 },{ 
     title: 'What are the installment payment?',
     description: '6 months and 12 months payment plan, only available for Group investors.'
 },{ 
     title: 'Who owns the property?',
     description: 'All property are owned by members of the mutual fund or Group investors and Trust-investors.'
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