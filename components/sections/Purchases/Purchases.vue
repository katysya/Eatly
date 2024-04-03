<script setup>
import { shuffle as _shuffle } from 'lodash-es';

import BaseSection from '../BaseSection/BaseSection.vue';
import Subtitle from '~/components/ui/Subtitle.vue';
import NotificationProductCard from '~/components/ui/cards/NotificationProductCard.vue';
import vSelect from '~/components/ui/Select.vue';

import { cards } from './lib';

const items = ref(cards);

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
                <div class="purchases__select">
                  <vSelect></vSelect>
                </div>
              </div>
              <div class="purchases__table-content">content</div>
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

.purchases {
  &__content {
    display: flex;
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
    border: 1px solid $whiteSecondary;
    border-radius: 25px;
    background-color: $white;

    &-top {
      display: flex;
    }
  }
}
</style>
