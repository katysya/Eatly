<script setup>
import BaseSection from '../BaseSection/BaseSection.vue';
import SubtitleMini from '../../ui/SubtitleMini.vue';
import DishesCard from '~/components/ui/cards/DishesCard.vue';

import { card } from './lib';
</script>

<template>
  <div class="container">
    <base-section>
      <div class="dishes">
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
      </div>
    </base-section>
  </div>
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
