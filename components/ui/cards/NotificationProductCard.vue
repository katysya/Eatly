<script setup>
defineProps({
  title: String,
  status: String,
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
        <p class="card__status">{{ status }}</p>
      </div>
      <p class="card__time">{{ time }}&nbsp;PM</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 16px;
  background-color: $white;
  padding: 5px 16px;
  display: flex;
  gap: 18px;
  filter: drop-shadow(
    13.407px -16.759px 27.932px rgba(0, 0, 0, 0.15)
  );

  &::after {
    content: '';
    position: absolute;
    width: 42px;
    height: 28px;
    top: -20px;
    right: -45px;
    background: url('~/assets/images/Main-Banner/notification.svg')
      no-repeat;
    background-size: cover;
  }

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
    color: $tenth;
    font-size: calc(8px + 8 * $size);
    font-weight: 600;
    line-height: 140%;
    width: max-content;
  }

  &__status {
    color: $tenth;
    font-size: calc(6px + 4 * $size);
    font-weight: 500;
    line-height: 140%;
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
    color: $linkLight;
  }
}
</style>
