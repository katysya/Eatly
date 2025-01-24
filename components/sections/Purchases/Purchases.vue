<script setup>
import { shuffle as _shuffle } from 'lodash-es';

import BaseSection from '../BaseSection/BaseSection.vue';
import Subtitle from '~/components/ui/Subtitle.vue';
import NotificationProductCard from '~/components/ui/cards/NotificationProductCard.vue';
import PurchasesCard from '~/components/ui/cards/PurchasesCard.vue';

import { cards, info, time } from './lib';

const items = ref(cards);
const selectedTime = ref();

function shuffle() {
  items.value = _shuffle(items.value);
}
</script>

<template>
  <section class="purchases">
    <div class="container">
      <base-section>
        <div class="purchases__content">
          <div class="purchases__orders">
            <subtitle
              name="Control"
              word="Purchases"
              additional="Via Dashboard"
            />
            <TransitionGroup
              tag="ul"
              name="fade"
              class="purchases__cards"
            >
              <div
                v-for="item in items"
                :key="item"
                class="purchases__item"
                @click="shuffle()"
              >
                <notification-product-card
                  :title="item.title"
                  :status="item.status"
                  :img="item.img"
                  :time="item.time"
                />
              </div>
            </TransitionGroup>
          </div>
          <div class="purchases__container">
            <div class="purchases__table">
              <div class="purchases__table-top">
                <p class="purchases__title">Purchases</p>
                <div class="purchases__select-container">
                  <Dropdown
                    v-model="selectedTime"
                    class="purchases__select"
                    :options="time"
                    optionLabel="name"
                    placeholder="Select a Time"
                  />
                </div>
              </div>
              <div class="purchases__table-content">
                <purchases-card
                  v-for="item in info"
                  :key="item.id"
                  :id="item.id"
                  :title="item.title"
                  :description="item.description"
                  :img="item.img"
                  :data="item.data"
                ></purchases-card>
              </div>
            </div>
          </div>
        </div>
      </base-section>
    </div>
  </section>
</template>

<style lang="scss">
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}

.p-highlight {
  color: $violet-800;
  background: $violet-100;
}

.p-dropdown:not(.p-disabled).p-focus {
  outline: 1px solid $violet-800;
}

.purchases {
  &__content {
    display: flex;
    gap: 141px;
  }

  &__orders {
    width: 100%;
  }

  &__container {
    width: 100%;
  }

  &__title {
    font-size: calc(16px + 12 * $size);
    line-height: calc(22px + 16 * $size);
    font-weight: 800;
    letter-spacing: 0.3px;
  }

  &__cards {
    position: relative;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__item {
    max-width: 345px;
    cursor: pointer;
  }

  &__table {
    display: flex;
    flex-direction: column;
    border: 1px solid $white-300;
    border-radius: 25px;
    background-color: $white-900;
    padding: 45px 40px;
    max-width: 534px;
    width: 100%;

    &-top {
      display: flex;
      margin-bottom: 22px;
      gap: 100px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
  }

  &__select-container {
    flex-grow: 1;
  }

  &__select {
    width: 100%;
  }
}
</style>
