<script setup>
import Title from '~/components/ui/text/Title.vue';
import MainButton from '../../ui/buttons/MainButton.vue';
import AdditionalButton from '~/components/ui/buttons/AdditionalButton.vue';
import TrustpilotIcon from '~/components/ui/icons/TrustpilotIcon.vue';
import StarsIcon from '~/components/ui/icons/StarsIcon.vue';
import NotificationProductCard from '~/components/ui/cards/NotificationProductCard.vue';
import ChartCard from '~/components/ui/cards/ChartCard.vue';

const notification = {
  title: 'Chicken Hell',
  status: 'On The Way',
  img: '/_nuxt/assets/images/Main-Banner/notification.webp',
  time: '3:09',
};
</script>

<template>
  <section class="main-banner">
    <div class="container">
      <div class="main-banner__content">
        <div class="main-banner__info">
          <p class="main-banner__users">OVER 1000 USERS</p>
          <div class="main-banner__title">
            <Title title="Enjoy Foods All Over The" word="World" />
          </div>
          <p class="main-banner__description">
            EatLy help you set saving goals, earn cash back offers, Go
            to disclaimer for more details and get paychecks up to two
            days early. Get a
            <span class="main-banner__description--purple"
              >$20 bonus.</span
            >
          </p>
          <div class="main-banner__action">
            <main-button
              title="Get Started"
              href="/sign in"
              icon="/_nuxt/assets/images/Header/signUp.svg"
            />
            <additional-button title="Go Pro" href="/sign in" />
          </div>
          <div class="main-banner__data">
            <a class="main-banner__trustpilot">
              <trustpilot-icon />
            </a>
            <div class="main-banner__rating">
              <stars-icon />
              <p class="main-banner__review">4900+</p>
            </div>
          </div>
        </div>
        <div class="main-banner__pictures">
          <div class="main-banner__notification">
            <notification-product-card
              :title="notification.title"
              :status="notification.status"
              :img="notification.img"
              :time="notification.time"
            />
          </div>
          <div class="main-banner__chart">
            <div
              class="main-banner__chart--wrapper"
              style="width: 150px"
            >
              <chart-card />
            </div>
          </div>
          <div class="main-banner__images">
            <img
              class="main-banner__img"
              src="~/assets/images/Main-Banner/food.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main-banner {
  padding: 90px 0 130px 0;

  &__content {
    display: flex;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &__users {
    position: relative;
    color: $fifth;
    font-size: calc(10px + 5 * $size);
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 2px;
    padding-left: 74px;
    margin-bottom: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 45%;
      left: 0;
      width: 54px;
      height: 1px;
      background: $fifth;
    }
  }

  &__title {
    max-width: 567px;
    margin-bottom: 16px;
  }

  &__description {
    color: $eighth;
    font-family: 'Inter', sans-serif;
    font-size: calc(11px + 7 * $size);
    font-weight: 400;
    line-height: 155%;
    max-width: 500px;
    margin-bottom: 53px;

    &--purple {
      color: $primary;
      opacity: 0.7;
    }
  }

  &__action {
    display: flex;
    gap: 18px;
    margin-bottom: 33px;
  }

  &__trustpilot {
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__data {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &__review {
    color: $eighth;
    font-size: 16px;
    font-weight: 500;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }

  &__rating {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__chart {
    position: absolute;
    background-color: $white;
    bottom: 100px;
    left: 50px;
    z-index: 5;
    border-radius: 15px;
    padding: 10px 0;
    border: 0.2px solid $whiteSecondary;
    box-shadow: $shadowSecondary;

    &--wrapper {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -35px;
        left: -25px;
        background: url('~/assets/images/Main-Banner/chart.svg')
          no-repeat;
        width: 27px;
        height: 27px;
      }
    }
  }

  &__notification {
    position: absolute;
    z-index: 5;
    top: -20px;
    right: 0;
  }

  &__pictures {
    position: relative;
    width: 50%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__images {
    width: auto;
    height: 100%;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 15%;
      z-index: -1;
      width: 100px;
      height: 100px;
      background-image: url('~/assets/images/Main-Banner/arrow.svg');
    }
  }

  &__img {
    width: auto;
    height: 100%;
  }
}
</style>
