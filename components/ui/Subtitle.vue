<script setup>
defineProps({
  name: String,
  word: String,
  additional: String,
});
</script>

<template>
  <div class="title">
    <h2 class="title__name">
      {{ name }} <span class="title__word">{{ word }}</span>
    </h2>
    <p class="title__additional">{{ additional }}</p>
  </div>
</template>

<style lang="scss">
.title {
  color: $black-400;
  font-size: calc(30px + 20 * $size);
  font-weight: 700;
  line-height: 114%;
  text-transform: capitalize;

  &__word {
    color: $violet-800;
  }

  &__name {
    font-size: unset;
  }

  &__additional {
    font-size: unset;
  }
}
</style>
