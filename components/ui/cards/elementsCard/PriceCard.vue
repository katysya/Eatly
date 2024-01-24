<script setup>
defineProps({
  price: Number,
  count: Number,
});
</script>

<template>
  <div class="price">
    <div class="price__cost">${{ price }}</div>
    <div class="price__count">{{ count }}</div>
  </div>
</template>

<style lang="scss" scoped>
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__cost {
    color: $tenth;
    font-size: 25.936px;
    font-weight: 700;
  }
}
</style>
