<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryPill',
  props: {
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    name() {
      return this.category.toLowerCase().replace(' ', '-');
    },
    isActive() {
      return this.category === 'accessories';
    }
  }
});
</script>

<template>
  <li class="nav-item col-3" role="presentation">
    <button
      class="nav-link"
      :class="{ active: isActive }"
      data-bs-toggle="tab"
      role="tab"
      aria-selected="true"
      :data-bs-target="'#' + name"
      :id="name + '-tab'"
    >
      <img
        :src="'file://' + image"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        :title="description"
        class="img-fluid category-img"
      />
    </button>
  </li>
</template>
