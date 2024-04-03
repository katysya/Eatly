<script setup>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

const countries = [
  { country: 'Spain' },
  { country: 'France' },
  { country: 'Ghana' },
  { country: 'Nigeria' },
  { country: 'Brazil' },
  { country: 'Ecuador' },
];
</script>

<template>
  <div class="select">
    <vSelect :options="countries" label="country"></vSelect>
  </div>
</template>
