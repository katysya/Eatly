<script setup>
import BlogCard from '~/components/ui/cards/BlogCard.vue';
defineProps({
  items: [Object],
});
</script>

<template>
  <Swiper
    :modules="[SwiperGrid]"
    :slides-per-view="3"
    :space-between="50"
    :grid="{
      rows: 2,
      fill: 'row',
    }"
    class="blog__slider"
  >
    <SwiperSlide v-for="item in items" :key="item.id">
      <blog-card :user="item" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.blog {
  &__slider {
    padding: 30px;
  }
}
</style>
