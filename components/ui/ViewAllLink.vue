<script setup>
import ArrowRight from '~/components/ui/icons/ArrowRight.vue';

defineProps({
  path: String,
});
</script>

<template>
  <NuxtLink :to="path" class="link"
    >View All
    <div class="link__icon">
      <ArrowRight />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  color: $linkLight;
  width: fit-content;
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.1px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;

  &__icon {
    display: flex;
    height: 100%;
    align-items: center;
    position: absolute;
    top: 0;
    right: -20%;
    transition: right 0.4s, opacity 0.1s;
    opacity: 0;
  }

  &:hover {
    color: $eighth;

    .link__icon {
      right: -40%;
      opacity: 1;
    }
  }
}
</style>
