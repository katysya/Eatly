<script setup>
defineProps({
  title: String,
  href: String,
});
</script>

<template>
  <a class="button" :href="{ href }">
    {{ title }}
  </a>
</template>

<style lang="scss" scoped>
.button {
  position: relative;
  padding: 18px 28px;
  color: $primary;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  overflow: hidden;
  transition: color 0.5s;
  z-index: 1;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid $primary;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: $primary;
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    right: 100%;
    transition: all 0.5s;
  }

  &:hover {
    color: $white;

    &::before {
      top: -30px;
      right: -30px;
    }
  }
}
</style>
