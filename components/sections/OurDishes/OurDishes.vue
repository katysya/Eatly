<script setup>
import BaseSection from '../BaseSection/BaseSection.vue';
import SubtitleMini from '../../ui/SubtitleMini.vue';
import DishesCard from '~/components/ui/cards/DishesCard.vue';
import ViewAllLink from '~/components/ui/ViewAllLink.vue';
import ViewAllLinkWrapper from '~/components/ui/wrappers/ViewAllLinkWrapper.vue';

import { card } from './lib';
</script>

<template>
  <section class="dishes">
    <div class="container">
      <base-section>
        <div class="dishes__content">
          <subtitle-mini title="Our Top" word="Dishes" />
          <ul class="dishes__list">
            <li
              class="dishes__item"
              v-for="item in card"
              :key="item.id"
            >
              <dishes-card :element="item" />
            </li>
          </ul>
          <view-all-link-wrapper>
            <view-all-link />
          </view-all-link-wrapper>
        </div>
      </base-section>
    </div>
  </section>
</template>

<style lang="scss">
.dishes {
  &__list {
    margin-top: 75px;
    margin-bottom: 65px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }
}
</style>
