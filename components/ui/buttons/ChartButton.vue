<script setup>
defineProps({
  id: Number,
  title: String,
  active: Boolean,
});
</script>

<template>
  <button class="button" :class="{ active: active }">
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 5px 11px;
  border-radius: 15px;
  color: $gray-400;
  font-size: 12px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: $violet-800;
    color: $white-900;
  }

  &:hover {
    background-color: $violet-100;
    color: $white-900;
  }
}
</style>
