<script setup>
import User from '~/components/ui/blog/User.vue';

defineProps({
  item: [Object],
});
</script>

<template>
  <a class="blog-card" href="/">
    <div class="blog-card__image">
      <img
        :src="item.bannerMini"
        class="blog-card__photo image"
        alt=""
      />
    </div>
    <div class="blog-card__title">{{ item.title }}</div>
    <div class="blog-card__user">
      <user
        :id="item.id"
        :nickname="item.user.nickname"
        :date="item.user.date"
        :img="item.user.avatar"
      />
    </div>
  </a>
</template>

<style lang="scss">
.blog-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 20px 30px;
  border-radius: 16px;
  box-shadow: $shadow-400;

  &__image {
    height: 272px;
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
