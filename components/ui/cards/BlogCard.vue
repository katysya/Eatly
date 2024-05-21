<script setup>
import User from '~/components/ui/blog/User.vue';

defineProps({
  user: [Object],
});
</script>

<template>
  <div class="blog-card">
    <div class="blog-card__image">
      <img
        :src="user.bannerMini"
        class="blog-card__photo image"
        alt=""
      />
    </div>
    <div class="blog-card__title">{{ user.title }}</div>
    <div class="blog-card__user">
      <user />
    </div>
  </div>
</template>

<style lang="scss">
.blog-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 20px 30px;
  border-radius: 16px;
  box-shadow: $shadowThird;

  &__image {
    min-height: 272px;
  }

  &__photo {
    border-radius: 12px;
  }

  &__title {
    font-size: calc(15px + 6 * $size);
    font-weight: 600;
    text-align: left;
  }
}
</style>
