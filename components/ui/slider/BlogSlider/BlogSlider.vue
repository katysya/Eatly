<script setup>
import BlogCard from '~/components/ui/cards/BlogCard.vue';
defineProps({
  items: [Object],
});

const navigateParams = {
  nextEl: '.blog__swiper-next',
  prevEl: '.blog__swiper-prev',
};
</script>

<template>
  <div class="blog__swiper">
    <Swiper
      :modules="[SwiperGrid, SwiperNavigation]"
      :slides-per-view="3"
      :navigation="navigateParams"
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
    <div class="blog__navigation">
      <div class="blog__navigation-container">
        <button class="blog__swiper-button blog__swiper-prev">
          <img src="~/assets/images/Blog/arrow.svg" alt="" />
        </button>
        <button class="blog__swiper-button blog__swiper-next">
          <img src="~/assets/images/Blog/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.blog {
  &__slider {
    padding: 30px;
  }

  &__navigation {
    margin-top: 40px;

    &-container {
      display: flex;
      gap: 80px;
      justify-content: center;
    }
  }

  &__swiper {
    margin-bottom: 90px;

    &-button {
      background: unset;
      cursor: pointer;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }

    &-prev {
      transform: rotate(180deg);
    }

    .swiper-button-disabled {
      opacity: 0.2;
    }
  }
}
</style>
