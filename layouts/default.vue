<script setup>
import Header from '../components/layouts/Header/Header.vue';
import Footer from '../components/layouts/Footer/Footer.vue';
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
