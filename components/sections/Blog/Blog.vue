<script setup>
import SubtitleMini from '~/components/ui/SubtitleMini.vue';
import BlogSlider from '~/components/ui/slider/BlogSlider/BlogSlider.vue';

import { users } from './lib';
</script>

<template>
  <section class="blog">
    <div class="container">
      <div class="blog__content">
        <subtitle-mini title="Latest" word="Articles" />
        <div class="blog__swiper">
          <blog-slider :items="users" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.blog {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
