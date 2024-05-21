<script setup>
defineProps({
  id: Number,
  title: String,
  active: Boolean,
  href: String,
  footer: Boolean || null,
});
</script>

<template>
  <NuxtLink
    :to="href"
    class="item"
    :class="{ active: active, item__footer: footer }"
    >{{ title }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.item {
  font-family: 'Inter', sans-serif;
  color: $secondary;
  font-size: calc(14px + 4 * $size);
  font-weight: 500;
  line-height: 150%;
  text-transform: capitalize;
  transition: color 0.3s;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: $primary;
  }

  &.active {
    color: $primary;
  }

  &__footer {
    color: $fifth;
  }
}
</style>
