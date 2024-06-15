<template>
  <NuxtLink to="/" class="logo">
    <div class="logo__img">
      <img
        class="image"
        src="~/assets/images/Logo/logo.svg"
        alt="Logo"
      />
    </div>
    <p class="logo__text">eatly</p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  text-decoration: none;

  &__img {
    width: 45px;
    height: 43px;
  }

  &__text {
    color: $violet-800;
    font-size: calc(18px + 3 * $size);
    font-weight: 600;
    line-height: 130%;
    transition: color 0.3s;
  }

  &:hover {
    .logo__text {
      color: $gray-600;
    }
  }
}
</style>
