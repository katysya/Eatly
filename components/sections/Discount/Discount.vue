<script setup>
import DiscountInput from '~/components/ui/inputs/DiscountInput.vue';
import MainButton from '~/components/ui/buttons/MainButton.vue';
</script>

<template>
  <section class="discount">
    <div class="container">
      <div class="discount__content">
        <div class="discount__title">GET 50%</div>
        <form class="discount__form">
          <discount-input />
          <main-button
            title="subscribe"
            href="/sign in"
            icon="/_nuxt/assets/images/Discount/Send.svg"
            light="true"
            class="discount__button"
          />
        </form>
        <div class="discount__image">
          <img
            src="~/assets/images/Discount/food.webp"
            class="discount__img"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.discount {
  padding-bottom: 140px;
  background: $white-100;

  &__content {
    background-image: url('~/assets/images/Discount/discount.webp');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    padding: 40px 66px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__title {
    font-size: 70px;
    font-weight: 800;
    line-height: 1;
    display: flex;
    justify-content: flex-start;
    letter-spacing: 0em;
    text-align: center;
    color: $white-900;
  }

  &__form {
    position: relative;
    width: 100%;
    max-width: 440px;
  }

  &__button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  &__image {
    position: relative;
  }

  &__img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
}
</style>
