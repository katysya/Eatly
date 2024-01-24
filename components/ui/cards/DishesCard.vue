<script setup>
import InfoCard from './elementsCard/InfoCard.vue';
import PriceCard from './elementsCard/PriceCard.vue';
import HeartIcon from '../icons/HeartIcon.vue';

defineProps({
  element: Object,
});
</script>

<template>
  <div class="card-product">
    <div class="card-product__img">
      <img :src="element.img" alt="" />
      <label class="container">
        <input type="checkbox" />
        <div class="checkmark">
          <heart-icon />
        </div>
      </label>
    </div>
    <div class="card__bottom">
      <info-card
        :category="element.category"
        :title="element.title"
        :time="element.time"
        :rating="element.rating"
      />
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
    height: 208px;
    width: inherit;

    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  transition: 100ms;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      color: red;
      animation: like_effect 400ms ease;

      path {
        stroke: red;
      }
    }
  }
}

.checkmark {
  top: 0;
  left: 0;
  height: 2em;
  width: 2em;
  transition: 100ms;
  animation: dislike_effect 400ms ease;
  color: transparent;
}

@keyframes like_effect {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes dislike_effect {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
