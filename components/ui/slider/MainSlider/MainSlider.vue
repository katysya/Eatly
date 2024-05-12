<script setup>
import CustomerSayCard from '~/components/ui/cards/CustomerSayCard.vue';
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="2.5"
    :space-between="47"
    :loop="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: true,
    }"
    :pagination="{ clickable: true }"
    class="main-swiper"
  >
    <SwiperSlide v-for="slide in 5" :key="slide">
      <CustomerSayCard />
    </SwiperSlide>
  </Swiper>
</template>

<style lnag="scss">
.main-swiper {
  min-height: 326px;

  .swiper-slide-active {
    .customer {
      max-height: 300px;
      margin-bottom: 30px;
    }
  }

  .swiper-pagination-bullet {
    width: 110px;
    border-radius: 50px;
    margin: 0;
  }
}
</style>
