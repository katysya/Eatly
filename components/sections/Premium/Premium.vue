<script setup>
import { info } from './lib';
import Subtitle from '../../ui/Subtitle.vue';
import MainButton from '../../ui/buttons/MainButton.vue';
</script>

<template>
  <section class="premium">
    <div class="container">
      <div class="premium__content">
        <div class="premium__block">
          <div class="premium__image">
            <img
              src="~/assets/images/Premium/mobile.webp"
              class="image"
              alt=""
            />
          </div>
        </div>
        <div class="premium__info">
          <subtitle
            name="Premium"
            word="Quality"
            additional="For Your Health"
          />
          <ul class="premium__list">
            <li
              v-for="item in info"
              :key="item.id"
              class="premium__item"
            >
              {{ item.text }}
            </li>
          </ul>
          <main-button
            title="Download"
            href="/"
            icon="/_nuxt/assets/images/Premium/download.svg"
            light="false"
            class="premium__button"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.premium {
  padding-top: calc(67px + 36 * $size);
  margin-bottom: calc(66px + 54 * $size);

  &__content {
    display: flex;
  }

  &__block {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }

  &__info {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 63px;
  }

  &__image {
    width: calc(170px + 134 * $size);
    position: relative;

    img {
      height: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      top: -20px;
      right: -60px;
      width: 52px;
      height: 61px;
      background-image: url('~/assets/images/Premium/pattern.svg');
      background-repeat: no-repeat;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 28px;
    list-style-type: disc;
    list-style-position: inside;
  }

  &__item {
    color: $eighth;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
  }

  &__button {
    &::after {
      content: '';
      position: absolute;
      width: 190px;
      height: 65px;
      top: 30px;
      left: 90%;
      background-image: url('~/assets/images/Premium/arrowDownload.svg');
      background-repeat: no-repeat;
    }
  }
}
</style>
