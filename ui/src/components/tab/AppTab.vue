<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '../button/AppButton.vue';

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
    AppButton
  }
});
</script>

<template>
  <div
    class="tab-pane fade"
    :class="{ active: isActive, show: isActive }"
    :id="catName"
    role="tabpanel"
    :aria-labelledby="catName + '-tab'"
  >
    <div class="container-fluid">
      <div class="row">
        <template v-for="app in data.apps" :key="app.name">
          <AppButton :app="app" />
        </template>
      </div>
    </div>
  </div>
</template>
