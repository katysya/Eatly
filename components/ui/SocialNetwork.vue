<script setup>
defineProps({
  title: String,
  icon: String,
  href: String,
});
</script>

<template>
  <a href="/" class="social">
    <img :src="icon" alt="" />
  </a>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  width: 21px;
  height: 21px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
}
</style>
