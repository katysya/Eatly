<script setup>
import SubtitleMini from '../../ui/SubtitleMini.vue';
import RestaurantCard from '~/components/ui/cards/RestaurantCard.vue';
import ViewAllLink from '~/components/ui/ViewAllLink.vue';
import ViewAllLinkWrapper from '~/components/ui/wrappers/ViewAllLinkWrapper.vue';

import { card } from './lib';
</script>

<template>
  <section class="restaraunts">
    <div class="container">
      <div class="restaraunt__content">
        <subtitle-mini title="Our Top" word="Restaurants" />
        <div class="restaraunts__list">
          <li
            v-for="item in card"
            :key="item.id"
            class="restaraunts__item"
          >
            <restaurant-card :element="item" />
          </li>
        </div>
        <view-all-link-wrapper>
          <view-all-link />
        </view-all-link-wrapper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.restaraunts {
  padding-top: 100px;
  margin-bottom: 120px;

  &__content {
    display: flex;
    border-top: 1px solid $gray-150;
    flex-direction: column;
    gap: calc(59px + 26 * $size);
  }

  &__list {
    margin: 85px 0 65px 0;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;
  }
}
</style>
