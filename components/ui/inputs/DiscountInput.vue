<template>
  <input
    class="input"
    type="email"
    name="email"
    placeholder="Enter Your Email Address"
  />
</template>

<style lang="scss" scoped>
.input {
  padding: 22px;
  font-size: calc(12px + 4 * $size);
  line-height: calc(16px + 8 * $size);
  font-weight: 400;
  border-radius: 15px;
  color: $gray-400;
  opacity: 0.7;
  letter-spacing: 0.03em;
  text-align: left;
  background-color: $white-900;
  border: 1px solid $violet-100;
  width: 100%;

  &:focus {
    border: 1px solid $white-900;
  }
}
</style>
