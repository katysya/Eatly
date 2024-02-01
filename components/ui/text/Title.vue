<script setup>
defineProps({
  title: String,
  word: String,
});
</script>

<template>
  <h1 class="title">
    {{ title }} <span class="title__word">{{ word }}</span>
  </h1>
</template>

<style lang="scss" scoped>
.title {
  color: $titleText;
  font-size: calc(46px + 29 * $size);
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -3px;

  span {
    color: $primary;
  }
}
</style>
