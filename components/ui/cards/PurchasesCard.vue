<script setup>
const value = ref(50);
</script>

<template>
  <div class="purchases-card">
    <div class="purchases-card__info">
      <div class="purchases-card__picture">
        <img
          class="purchases-card__img image"
          src="~/assets/images/Main-Banner/food.webp"
          alt=""
        />
      </div>
      <div class="purchases-card__description">
        <div class="purchases-card__name">Expense</div>
        <div class="purchases-card__percent">Increased By 10%</div>
      </div>
      <div class="purchases-card__money">$409.00</div>
    </div>
    <div class="purchases-card__progress">
      <ProgressBar :value="value"></ProgressBar>
    </div>
  </div>
</template>

<style lang="scss">
.purchases-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid $primaryLight;
  border-radius: 20px;
  padding: 25px;

  &__info {
    display: flex;
    align-items: center;
    gap: 18px;
    width: 100%;
  }

  &__picture {
    width: 50px;
    height: 50px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex-grow: 1;
  }

  &__name {
    color: $thirteenth;
    font-size: calc(12px + 7 * $size);
    line-height: calc(16px + 12 * $size);
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  &__percent {
    color: $twelfth;
    font-size: calc(10px + 6 * $size);
    line-height: calc(14px + 10 * $size);
    font-weight: 500;
    letter-spacing: 1px;
  }

  &__money {
    font-family: 'Inter', sans-serif;
    font-size: 21.99px;
    font-weight: 800;
    line-height: 32.98px;
    letter-spacing: 0.3141176700592041px;
    text-align: right;
  }

  .p-progressbar {
    border-radius: 78px;
    height: 10px;
  }

  .p-progressbar-label {
    display: none;
  }

  .p-progressbar-value {
    background: $primary;
    border-radius: 78px;
  }
}
</style>
