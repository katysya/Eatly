<script setup>
import Customer from '~/components/ui/cards/elementsCard/Customer.vue';
</script>

<template>
  <div class="customer-say-card">
    <Customer />
    <div class="customer-say-card__info">
      <div class="customer-say-card__text">
        “ Online invoice payment helps companies save time, are faster
        and save maximum effort for the clients and save maximum
        effort. Online invoice payment helps companies save time ”
      </div>
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
  background: $white;
  color: $secondary;

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
