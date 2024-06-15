<script setup>
import Logo from '../../ui/Logo.vue';
import ItemMenu from '../../ui/ItemMenu.vue';
import SocialNetwork from '../../ui/SocialNetwork.vue';
import { menu, socialNetworks } from './lib';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__top">
          <Logo />
          <nav>
            <ul class="footer__navigation">
              <li v-for="element in menu" :key="element.id">
                <ItemMenu
                  :id="element.id"
                  :title="element.title"
                  :active="element.active"
                  :href="element.href"
                  :footer="true"
                  @click="clickActiveItemMenu(element.id)"
                />
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__bottom">
          <p class="footer__copy">
            © 2024 EATLY All Rights Reserved.
          </p>
          <ul class="footer__list">
            <li
              v-for="item in socialNetworks"
              :key="item.id"
              class="footer__social"
            >
              <SocialNetwork
                :title="item.title"
                :icon="item.icon"
                :href="item.href"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $white-400;
  padding-top: 96px;
  padding-bottom: 81px;

  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 29px;
    border-bottom: 1px solid $gray-100;
  }

  &__bottom {
    padding-top: 57px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__copy {
    color: $gray-400;
    font-family: 'Inter', sans-serif;
    font-size: calc(13px + 4 * $size);
    font-weight: 500;
    line-height: 147%;
  }

  &__navigation {
    display: flex;
    flex-direction: row;
    gap: 70px;
  }

  &__list {
    display: flex;
    flex-direction: row;
    gap: 53px;
    list-style-type: none;
  }
}
</style>
