<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  methods: {
    async openApp() {
      // The app object is passed in as a prop
      // Use the VSK API to open the app
      await (this as any).$vsk.openApp(this.app.path);
      (this as any).$vsk.exit();
    }
  }
});
</script>

<template>
  <button
    class="btn col-2 btn-app"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    :title="app.name"
    @click="openApp()"
  >
    <img :src="'file://' + app.icon" class="img-fluid" style="width: 100%" />
    <span class="name-app text-center">{{ app.name }}</span>
    <span class="text-muted" style="display: none">{{ app.description }}</span>
    <span style="display: none">{{ app.keywords }}</span>
  </button>
</template>
