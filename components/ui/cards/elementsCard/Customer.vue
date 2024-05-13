<template>
  <div class="customer">
    <div class="customer__photo">
      <img
        src="~/assets/images/Customer/customer.webp"
        class="image"
        alt=""
      />
    </div>
    <div class="customer__info">
      <div class="customer__name">Alexander R.</div>
      <div class="customer__time">01 Year With Us</div>
    </div>
  </div>
</template>

<style lang="scss">
.customer {
  display: flex;
  align-items: center;
  gap: 20px;
  max-height: 0;
  margin-bottom: 0;
  overflow: hidden;
  transition: max-height 0.6s;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 500;
  }

  &__photo {
    width: 71px;
    height: 71px;
    border-radius: 50%;
  }

  &__name {
    font-size: calc(13px + 7 * $size);
  }

  &__time {
    font-size: calc(10px + 7 * $size);
    color: $secondary;
  }
}
</style>
