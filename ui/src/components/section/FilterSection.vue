<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import AppButton from '../button/AppButton.vue';

const { apps, filter } = defineProps({
  apps: {
    type: Array,
    required: true
  },
  filter: {
    type: String,
    required: true
  }
});

const appsFiltred = computed((): Array<any> => {
  return apps.filter(
    (app: any) =>
      app.name.toLowerCase().includes(filter) || app.description.toLowerCase().includes(filter)
  );
});
</script>

<template>
  <div class="hydriam-search-results">
    <AppButton v-for="app in appsFiltred" :key="app.name" :app="app" />
  </div>
</template>
