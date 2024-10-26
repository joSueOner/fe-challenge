<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComponent from './Shared/Components/NavComponent.vue'
import FooterComponent from './Shared/Components/Footer/FooterComponent.vue';

</script>

<template>
  <NavComponent />
  <RouterView />
  <FooterComponent />

</template>

<style scoped></style>
