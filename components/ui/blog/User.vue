<script setup>
defineProps({
  id: Number,
  nickname: String,
  img: String,
  title: String,
  banner: String,
  date: String,
});
</script>

<template>
  <div class="blog__user">
    <div class="blog__user-image">
      <img :src="img" class="blog__user-photo image" alt="" />
    </div>
    <div class="blog__user-info">
      <div class="blog__write">Written By</div>
      <div class="blog__nickname">{{ nickname }}</div>
    </div>
    <div class="blog__user-date">{{ date }}</div>
  </div>
</template>

<style lang="scss">
.blog {
  &__user {
    display: flex;
    gap: 15px;
    align-items: center;

    &-image {
      width: 55px;
      height: 55px;
    }

    &-photo {
      border-radius: 50%;
    }

    &-info {
      flex-grow: 1;
    }

    &-date {
      color: $gray-150;
    }
  }

  &__write {
    font-size: calc(10px + 5 * $size);
    color: $gray-400;
    font-weight: 400;
    text-align: left;
  }

  &__nickname {
    font-size: calc(16px + 5 * $size);
    font-weight: 500;
    text-align: left;
  }
}
</style>
