<script setup>
import InfoCard from './elementsCard/InfoCard.vue';
import PriceCard from './elementsCard/PriceCard.vue';
import Favorite from './elementsCard/Favorite.vue';

defineProps({
  element: Object,
});
</script>

<template>
  <div class="card-product">
    <div class="card-product__heart">
      <favorite />
    </div>
    <div class="card-product__img">
      <img :src="element.img" alt="" />
    </div>
    <div class="card-product__bottom">
      <div class="card-product__info">
        <info-card
          :category="element.category"
          :title="element.title"
          :time="element.time"
          :rating="element.rating"
        />
      </div>
      <price-card :price="element.price" :count="element.count" />
    </div>
  </div>
</template>

<style lang="scss">
.card-product {
  border-radius: 34px;
  border: 1px solid $eleventh;
  background: $white;
  box-shadow: $shadowPrimary;
  padding: 31px 24px 30px 15px;
  height: 100%;

  &__img {
    height: 184px;
    width: inherit;

    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }

  &__info {
    margin-bottom: 12px;
  }

  &__heart {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
}
</style>
