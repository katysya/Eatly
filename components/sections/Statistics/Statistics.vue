<script setup>
import StatisticsCard from '../../ui/StatisticsCard.vue';
import { data } from './lib';
</script>

<template>
  <section class="statistics">
    <div class="statistics__img statistics__img--left">
      <img
        class="desktop"
        src="~/assets/images/Statistics/leftDesktop.webp"
        alt=""
      />
    </div>
    <div class="statistics__img statistics__img--right">
      <img
        class="desktop"
        src="~/assets/images/Statistics/rightDesktop.webp"
        alt=""
      />
    </div>
    <div></div>
    <div class="container">
      <div class="statistics__content">
        <ul class="statistics__list">
          <template v-for="item in data" :key="item.id">
            <li class="statistics__item">
              <StatisticsCard
                :title="item.title"
                :description="item.description"
              />
            </li>
            <li class="statistics__element"></li
          ></template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.statistics {
  background-color: $violet-800;
  padding: 40px 0;
  position: relative;

  &__img {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;

    img {
      height: 100%;
    }

    &--left {
      left: 0;
      width: 287px;
    }

    &--right {
      right: 0;
      width: 160px;
    }
  }

  &__list {
    display: flex;
    gap: 46px;
    justify-content: center;
  }

  &__element {
    width: 1px;
    background: $gray-100;
    opacity: 0.15;

    &:last-child {
      display: none;
    }
  }
}
</style>
