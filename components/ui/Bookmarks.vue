<script setup>
import BookMarksIcon from './icons/BookMarksIcon.vue';
</script>

<template>
  <label class="label">
    <input type="checkbox" />
    <book-marks-icon />
  </label>
</template>

<style lang="scss" scoped>
.label {
  display: block;
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primaryLight;
  border-radius: 50%;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ svg {
      fill: $primary;
    }
  }

  svg {
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.3s;
    fill: transparent;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
