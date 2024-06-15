<script setup>
import CustomerSayCard from '~/components/ui/cards/CustomerSayCard.vue';

defineProps({
  items: [Object],
});
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
    <SwiperSlide v-for="item in items" :key="item.id">
      <CustomerSayCard :element="item" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.main-swiper {
  min-height: 350px;

  .swiper-slide-active {
    .customer {
      max-height: 200px;
      margin-bottom: 30px;
    }
  }

  .swiper-pagination {
    right: 0;
    width: 567px;
    margin: 0 90px 0 auto;
    background: $violet-200;
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
      background: $violet-800;
    }
  }
}
</style>
