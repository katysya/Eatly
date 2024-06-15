<script setup>
defineProps({
  title: String,
  status: Object,
  img: String,
  time: String,
});
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="img" alt="" />
    </div>
    <div class="card__description">
      <div class="card__info">
        <p class="card__title">{{ title }}</p>
        <p
          class="card__status"
          :class="[
            status.id === 2
              ? 'card__status-delivered'
              : status.id === 3
              ? 'card__status-cancel'
              : '',
            card__status,
          ]"
        >
          {{ status.name }}
        </p>
      </div>
      <p class="card__time">{{ time }}&nbsp;PM</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 16px;
  background-color: $white-900;
  padding: 5px 16px;
  display: flex;
  gap: 18px;
  filter: drop-shadow(
    13.407px -16.759px 27.932px rgba(0, 0, 0, 0.15)
  );

  &__img {
    width: 80px;
    height: 80px;

    img {
      height: 100%;
    }
  }

  &__info {
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__title {
    color: $gray-700;
    font-size: calc(8px + 8 * $size);
    font-weight: 600;
    line-height: 140%;
    width: max-content;
  }

  &__status {
    color: $gray-700;
    font-size: calc(6px + 4 * $size);
    font-weight: 500;
    line-height: 140%;

    &-cancel {
      color: $red-900;
    }

    &-delivered {
      color: $green-400;
    }
  }

  &__description {
    display: flex;
    gap: 40px;
  }

  &__time {
    display: flex;
    align-items: flex-end;
    font-size: calc(6px + 5 * $size);
    font-weight: 500;
    line-height: 15px;
    color: $gray-250;
  }
}
</style>
