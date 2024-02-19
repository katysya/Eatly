<script setup>
import MainBanner from '~/components/sections/MainBanner/MainBanner.vue';
import Statistics from '~/components/sections/Statistics/Statistics.vue';
import Premium from '~/components/sections/Premium/Premium.vue';
import OurRestaurants from '~/components/sections/OurRestaurants/OurRestaurants.vue';
import OurDishes from '~/components/sections/OurDishes/OurDishes.vue';
import CustomerSay from '~/components/sections/CustomerSay/CustomerSay.vue';
</script>

<template>
  <div>
    <main-banner />
    <statistics />
    <premium />
    <our-restaurants />
    <our-dishes />
    <customer-say />
    <discount />
  </div>
</template>
