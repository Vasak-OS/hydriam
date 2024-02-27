<script lang="ts" setup>
import { defineProps, inject } from 'vue';

const $vsk: any = inject('$vsk');

const { app } = defineProps({
  app: {
    type: Object,
    required: true
  }
});

const openApp = async () => {
  await $vsk.openApp(app.path);
  $vsk.exit();
};
</script>

<template>
  <button :title="app.name" @click="openApp()">
    <img :src="'file://' + app.icon" />
    <span style="display: none">{{ app.name }}</span>
    <span style="display: none">{{ app.description }}</span>
    <span style="display: none">{{ app.keywords }}</span>
  </button>
</template>
