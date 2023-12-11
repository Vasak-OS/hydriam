<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCard',
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
  <div
    class="col-12 container app-card"
    @click="openApp()"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    :title="app.description"
  >
    <div class="row">
      <div class="col-2 app-card-image"><img :src="'file://' + app.icon" class="img-fluid" /></div>
      <div class="col-10 app-card-info">
        <span class="name-app text-center">{{ app.name }}</span>
        <span class="text-muted" style="display: none">{{ app.description }}</span>
        <span style="display: none">{{ app.keywords }}</span>
      </div>
    </div>
  </div>
</template>
