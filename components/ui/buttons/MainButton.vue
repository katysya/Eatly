<script setup>
defineProps({
  title: String,
  href: String,
  icon: String,
  light: Boolean,
});
</script>

<template>
  <NuxtLink class="button" :to="{ href }">
    <div class="button__title" :class="{ light: light }">
      {{ title }}
      <p class="button__text">{{ title }}</p>
    </div>
    <div class="button__img">
      <img :src="icon" alt="" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
  border-radius: 12px;
  position: relative;
  background-color: $violet-800;
  text-decoration: none;
  padding: 12px 19px;
  display: flex;
  gap: 10px;
  align-items: center;
  text-transform: capitalize;
  width: fit-content;
  cursor: pointer;

  .light {
    font-weight: 500;
    text-transform: uppercase;
    font-size: calc(10px + 5 * $size);
  }

  &__title {
    color: transparent;
    font-family: 'Inter', sans-serif;
    font-size: calc(12px + 6 * $size);

    font-weight: 700;
    line-height: 150%;
    transition: left 0.3s;
  }

  &__text {
    position: absolute;
    width: fit-content;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: $white-100;
    transition: all 0.3s;
  }

  &__img {
    opacity: 0;
    width: 18px;
    height: 18px;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
  }

  &:hover {
    .button__text {
      left: 0%;
      padding-left: 20px;
      transform: translate(0%, -50%);
    }

    .button__img {
      opacity: 1;
    }
  }
}
</style>
