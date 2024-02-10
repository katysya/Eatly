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
  color: $fifth;
  font-size: 12px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: $primary;
    color: $white;
  }

  &:hover {
    background-color: $primaryLight;
    color: $white;
  }
}
</style>
