<script setup>
import Logo from '../../ui/Logo.vue';
import ItemMenu from '../../ui/ItemMenu.vue';
import MainButton from '../../ui/buttons/MainButton.vue';
import SimpleButton from '../../ui/SimpleButton.vue';
import { menu } from './lib';

const clickActiveItemMenu = (id) => {
  menu.forEach((item) => {
    if (item.id === id) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__menu">
          <logo />
          <nav>
            <ul class="header__navigation">
              <li v-for="element in menu" :key="element.id">
                <item-menu
                  :id="element.id"
                  :title="element.title"
                  :active="element.active"
                  :href="element.href"
                  @click="clickActiveItemMenu(element.id)"
                />
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__entry">
          <simple-button title="Login" href="/login" />
          <main-button
            title="Sign Up"
            href="/sign in"
            icon="/_nuxt/assets/images/Header/signUp.svg"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 17px;
    padding-top: 34px;
    border-bottom: 1px solid $third;
  }

  &__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 73px;
  }

  &__navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    gap: 53px;
  }

  &__entry {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
  }
}
</style>
