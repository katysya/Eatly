<script setup>
import Customer from '~/components/ui/cards/elementsCard/Customer.vue';

defineProps({
  element: Object,
});
</script>

<template>
  <div class="customer-say-card">
    <Customer />
    <div class="customer-say-card__info">
      <div class="customer-say-card__text">{{ element.text }}</div>
      <div class="customer-say-card__rating">
        <img
          src="~/assets/images/Customer/stars.svg"
          class="image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.customer-say-card {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 38px 43px;
  margin: 20px 0;
  background: $white-900;
  color: $gray-600;
  box-shadow: $shadow-300;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__rating {
    width: 138px;
    height: 23px;
  }
}
</style>
