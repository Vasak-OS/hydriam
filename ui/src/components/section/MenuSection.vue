<script lang="ts">
import { defineComponent } from 'vue';
import AppTab from '../tab/AppTab.vue';

export default defineComponent({
  name: 'MenuSection',
  props: {
    menuData: {
      type: Object,
      required: true
    }
  },
  components: {
    AppTab
  }
});
</script>

<template>
  <div class="col-12">
    <div class="tab-content" id="menu-content">
      <template v-for="(value, key) in menuData" :key="key">
        <AppTab :category="key" :data="value" />
      </template>
    </div>
  </div>
</template>
