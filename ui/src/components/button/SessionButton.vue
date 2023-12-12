<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SessionButton',
  props: {
    title: String,
    img: String,
  }
});
</script>

<template>
  <a
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    :title="title"
    href="#"
    class="btn btn-primary btn-session"
  >
    <img :src="img" class="img-fluid" style="filter: drop-shadow(1px 1px 3px #222)" />
  </a>
</template>
