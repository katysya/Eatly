<script setup>
defineProps({
  category: Object,
  title: String,
  time: String,
  rating: Number,
});
</script>

<template>
  <div class="info">
    <div
      class="info__category"
      :class="
        category.id == 1
          ? 'info__category--1'
          : category.id == 2
          ? 'info__category--2'
          : 'info__category--3'
      "
    >
      {{ category.name }}
    </div>
    <div class="info__title">{{ title }}</div>
    <div class="info__data">
      <div class="info__time">{{ time }} •</div>
      <div class="info__rating">
        <div class="info__star">
          <img src="~/assets/images/OurRestaurant/star.svg" alt="" />
        </div>
        {{ rating }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.info {
  display: flex;
  flex-direction: column;

  &__category {
    border-radius: 5px;
    width: fit-content;
    background: $white-100;
    padding: 3px 8px;
    color: $black-400;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;

    &--1 {
      color: $yellow-800;
      background: $yellow-100;
    }

    &--2 {
      color: $red-900;
      background: $red-100;
    }

    &--3 {
      color: $green-400;
      background: $green-100;
    }
  }

  &__title {
    color: $gray-700;
    font-size: calc(15px + 8 * $size);
    font-weight: 600;
  }

  &__data {
    display: flex;
    flex-direction: row;
    font-size: calc(16px + 3 * $size);
    line-height: 133%;
    gap: 7px;
  }

  &__time {
    color: $gray-350;
    font-size: inherit;
    font-weight: 400;
    line-height: inherit;
  }

  &__rating {
    display: flex;
    font-size: inherit;
    gap: 7px;
    color: $gray-350;
    font-weight: 400;
    line-height: inherit;
  }
}
</style>
