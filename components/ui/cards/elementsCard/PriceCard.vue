<script setup>
const props = defineProps(['price', 'count']);

let sumProduct = ref(props.price);
let countProduct = ref(props.count);

const addProductToCrat = () => {
  countProduct.value++;
  sumProduct.value += countProduct.value > 1 ? props.price : 0;
};

const deleteProductToCart = () => {
  countProduct.value--;
  sumProduct.value -= countProduct.value >= 1 ? props.price : 0;
};
</script>

<template>
  <div class="price">
    <div class="price__cost">${{ sumProduct }}</div>
    <div class="price__action" :class="{ active: countProduct > 0 }">
      <button
        class="price__button price__button-dec"
        @click="deleteProductToCart"
        :disabled="countProduct == 0 ? true : false"
      >
        -
      </button>
      <div class="price__count">{{ countProduct }}</div>
      <button
        class="price__button price__button-inc"
        @click="addProductToCrat"
        :disabled="countProduct == 20 ? true : false"
      >
        +
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__cost {
    color: $tenth;
    font-size: 26px;
    font-weight: 700;
  }

  &__action {
    display: flex;
    align-items: center;
    position: relative;

    &.active {
      .price__button {
        &-dec {
          right: calc(2 * $widthButtonCount);
        }
      }

      .price__count {
        right: calc($widthButtonCount);
      }
    }
  }

  &__count {
    color: $tenth;
    position: absolute;
    right: 0;
    font-size: 20px;
    width: 35px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: right 0.3s;
  }

  &__button {
    position: absolute;
    right: 0;
    border-radius: 10px;
    width: 35px;
    height: 35px;
    background-color: $tenth;
    font-size: 24px;
    font-weight: 400;
    color: $white;
    transition: all 0.3s;

    &:disabled {
      opacity: 0.6;
    }
  }
}
</style>
