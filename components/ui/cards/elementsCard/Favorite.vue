<script setup>
import HeartIcon from '../../icons/HeartIcon.vue';
</script>

<template>
  <label class="heart">
    <input type="checkbox" class="heart__checkbox" />
    <div class="heart__checkmark">
      <heart-icon />
    </div>
  </label>
</template>

<style lang="scss">
.heart {
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  transition: 100ms;

  &__checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .heart__checkmark {
      color: $red-800;
      animation: like_effect 400ms ease;

      path {
        stroke: $red-800;
      }
    }
  }

  &__checkmark {
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    transition: 100ms;
    animation: dislike_effect 400ms ease;
    color: transparent;
  }
}

@keyframes like_effect {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes dislike_effect {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
