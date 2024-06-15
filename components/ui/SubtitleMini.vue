<script setup>
defineProps({
  title: String,
  word: String,
});
</script>

<template>
  <div class="subtitle">
    <h2 class="subtitle__name">
      {{ title }} <span class="subtitle__word">{{ word }}</span>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.subtitle {
  color: $gray-700;
  font-size: 45px;
  font-weight: 600;
  font-size: calc(30px + 15 * $size);
  text-align: center;

  &__name {
    font-size: inherit;
  }

  &__word {
    color: $violet-800;
  }
}
</style>
