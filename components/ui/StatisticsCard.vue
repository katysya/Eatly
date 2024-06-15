<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="card">
    <div class="card__title">
      {{ title }}
    </div>
    <div class="card__description">
      {{ description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 7px;

  &__title {
    color: $white-900;
    text-align: center;
    font-size: 43px;
    font-weight: 700;
    line-height: 125%;
  }

  &__description {
    color: $violet-200;
    text-align: center;
    font-family: 'Inter', sans-serif;
    white-space: pre-wrap;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }
}
</style>
