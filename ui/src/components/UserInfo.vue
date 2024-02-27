<script lang="ts" setup>
import { inject, computed, ref, onMounted } from 'vue';

const $vsk: any = inject('vsk');
const homePath = ref('');

const profilePicture = computed(() => `file://${homePath.value}/.face`);

const setHomePath = async () => {
  homePath.value = await $vsk.getHome();
};

onMounted(() => {
  setHomePath();
});

</script>

<template>
  <div id="user-info" class="hydriam-user">
    <img :src="profilePicture" alt="user" />
  </div>
</template>
