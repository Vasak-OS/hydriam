<script lang="ts">
import { defineComponent } from 'vue';
import CategoryPill from '../button/CategoryPill.vue';
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
    CategoryPill,
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
    <ul class="nav nav-pills nav-justified" id="menu-category" role="tablist">
      <template v-for="(value, key) in menuData" :key="key">
        <CategoryPill :category="key" :image="value.icon" :description="value.description" />
      </template>
    </ul>
  </div>
</template>
