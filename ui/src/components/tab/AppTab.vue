<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../card/AppCard.vue';

export default defineComponent({
  name: 'AppTab',
  props: {
    category: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    catName() {
      // @ts-ignore
      return this.category.replaceAll(' ', '-').toLowerCase();
    },
    isActive() {
      return this.category === 'accessories';
    }
  },
  components: {
    AppCard
  }
});
</script>

<template>
  <div
    class="tab-pane fade app-tab"
    :class="{ active: isActive, show: isActive }"
    :id="catName"
    role="tabpanel"
    :aria-labelledby="catName + '-tab'"
  >
    <div class="container-fluid">
      <div class="row">
        <template v-for="app in data.apps" :key="app.name">
          <AppCard :app="app" />
        </template>
      </div>
    </div>
  </div>
</template>
