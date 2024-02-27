<script lang="ts" setup>
import { defineProps } from 'vue';

const emit = defineEmits(['update:categorySelected']);

let { category, categorySelected } = defineProps({
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
  },
  categorySelected: {
    type: String,
    required: true
  }
});

const setCategory = (category: string) => {
  categorySelected = category;
  console.log(categorySelected);
  emit('update:categorySelected', categorySelected);
};
</script>

<template>
  <button @click="setCategory(category)">
    <img :src="'file://' + image" :title="description" :alt="category" />
  </button>
</template>
