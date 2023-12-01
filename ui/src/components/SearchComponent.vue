<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchComponent',
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  computed: {
    filterValue: {
      get() {
        return this.filter;
      },
      set(value: string) {
        this.$emit('update:filter', value);
      }
    }
  }
});
</script>
<template>
  <div class="col-12" id="searc-div">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        id="search"
        v-model="filterValue"
        aria-describedby="icon-search"
      />
      <span class="input-group-text" id="icon-search">🔍</span>
    </div>
  </div>
</template>
