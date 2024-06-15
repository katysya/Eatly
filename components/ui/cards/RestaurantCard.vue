<script setup>
import BookMarks from '~/components/ui/Bookmarks.vue';

defineProps({
  element: Object,
});
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="element.img" alt="" />
    </div>
    <div class="card__bottom">
      <div class="card__info">
        <div
          class="card__category"
          :class="
            element.category.id == 1
              ? 'card__category--1'
              : element.category.id == 2
              ? 'card__category--2'
              : 'card__category--3'
          "
        >
          {{ element.category.name }}
        </div>
        <div class="card__title">{{ element.title }}</div>
        <div class="card__data">
          <div class="card__time">{{ element.time }} •</div>
          <div class="card__rating">
            <div class="card__star">
              <img
                src="~/assets/images/OurRestaurant/star.svg"
                alt=""
              />
            </div>
            {{ element.rating }}
          </div>
        </div>
      </div>
      <book-marks />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 30px;
  border: 1.251px solid #f4f4f6;
  background: $white-900;
  box-shadow: 66px 71px 35px 0px rgba(229, 229, 229, 0.7);

  &__img {
    height: 176px;
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 30px 30px 0 0;
    }
  }

  &__bottom {
    padding: 10px 27px 18px 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

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
  }

  &__title {
    color: $gray-700;
    font-size: 26px;
    font-weight: 600;
    line-height: 162%;
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
