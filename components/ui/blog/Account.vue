<template>
  <div class="blog__account">
    <div class="blog__account-image">
      <img
        src="~/assets/images/Blog/user1.webp"
        class="blog__account-photo image"
        alt=""
      />
    </div>
    <div class="blog__account-info">
      <div class="blog__write">Written By</div>
      <div class="blog__nickname">Perperzon</div>
    </div>
  </div>
</template>

<style lang="scss">
.blog {
  &__account {
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
  }

  &__write {
    font-size: calc(10px + 5 * $size);
    color: $fifth;
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
