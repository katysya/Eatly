<script setup>
import CustomerSayCard from '~/components/ui/cards/CustomerSayCard.vue';
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="2"
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

<style lang="scss">
.main-swiper {
  min-height: 326px;

  .swiper-slide-active {
    .customer {
      max-height: 200px;
      margin-bottom: 30px;
    }
  }

  .swiper-pagination {
    right: 0;
    width: 567px;
    margin: 0 120px 0 auto;
    background: $seventh;
    border-radius: 50px;
    display: flex;

    .swiper-pagination-bullet {
      background: transparent;
      flex-grow: 1;
      border-radius: 50px;
      margin: 0;
      transition: background 0.8s;
    }

    .swiper-pagination-bullet-active {
      background: $primary;
    }
  }
}
</style>
