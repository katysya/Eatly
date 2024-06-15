<script setup>
defineProps({
  title: String,
  href: String,
});
</script>

<template>
  <NuxtLink class="button" :to="{ href }">{{ title }}</NuxtLink>
</template>

<style lang="scss" scoped>
.button {
  font-family: 'Inter', sans-serif;
  color: $gray-600;
  font-size: calc(12px + 6 * $size);
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  padding: 17px 26px;
  line-height: 150%;
  text-transform: capitalize;
  transition: color 0.3s;

  &:hover {
    color: $violet-800;
  }
}
</style>
