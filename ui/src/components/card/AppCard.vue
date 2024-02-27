<script lang="ts" setup>
import { inject, defineProps } from 'vue';

const $vsk: any = inject('vsk');

defineProps({
  app: {
    type: Object,
    required: true
  }
});

const openApp = async (path: string) => {
  await $vsk.openApp(path);
  $vsk.exit();
};
</script>

<template>
  <div class="hydriam-application" @click="openApp(app.path)" :title="app.description">
    <img :src="'file://' + app.icon" class="img-fluid" />
    <div class="col-10 app-card-info">
      {{ app.name }}
      <span class="text-muted" style="display: none">{{ app.description }}</span>
      <span style="display: none">{{ app.keywords }}</span>
    </div>
  </div>
</template>
