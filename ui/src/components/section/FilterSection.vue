<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '../button/AppButton.vue';

export default defineComponent({
  name: 'FilterSection',
  props: {
    apps: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  computed: {
    appsFiltred(): Object {
      return this.apps.filter(
        (app: any) =>
          app.name.toLowerCase().includes(this.filter) ||
          app.description.toLowerCase().includes(this.filter)
      );
    }
  },
  components: {
    AppButton
  }
});
</script>

<template>
  <div class="col-12">
    <div class="tab-content" id="menu-content">
      <div class="container-fluid">
        <div class="row">
          <template v-for="app in appsFiltred" :key="app.name">
            <AppButton :app="app" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
