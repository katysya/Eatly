<script setup>
import BaseSection from '../BaseSection/BaseSection.vue';
import SubtitleMini from '~/components/ui/SubtitleMini.vue';
import MainSlider from '~/components/ui/slider/MainSlider/MainSlider.vue';

import { reviews } from './lib';
</script>

<template>
  <section class="customersay">
    <base-section>
      <div class="customersay__content">
        <subtitle-mini title="Customer" word="Say" />
        <div class="customersay__block">
          <MainSlider :items="reviews" />
        </div>
      </div>
    </base-section>
  </section>
</template>

<style lang="scss">
.customersay {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-left: 103px;
  }
}
</style>
