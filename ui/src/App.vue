<script lang="ts" setup>
import { ref, inject, onMounted, computed } from 'vue';
import SearchComponent from '@/components/SearchComponent.vue';
import MenuSection from '@/components/section/MenuSection.vue';
import FilterSection from '@/components/section/FilterSection.vue';
import UserInfo from '@/components/UserInfo.vue';
import SessionButton from '@/components/button/SessionButton.vue';
import CategoryPill from '@/components/button/CategoryPill.vue';
import WeatherWidget from '@/components/widget/WeatherWidget.vue';

import shutdown from '@/assets/img/shutdown.svg';
import reboot from '@/assets/img/reboot.svg';
import logout from '@/assets/img/logout.svg';
import suspend from '@/assets/img/suspend.svg';

const $vsk = inject('vsk') as any;
const menuData = ref({
  'Category 1': {
    icon: 'icon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    apps: [
      {
        name: 'App 1',
        icon: 'icon',
        url: 'https://www.google.com'
      },
      {
        name: 'App 2',
        icon: 'icon',
        url: 'https://www.google.com'
      }
    ]
  },
  'Category 2': {
    icon: 'icon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    apps: [
      {
        name: 'App 3',
        icon: 'icon',
        url: 'https://www.google.com'
      },
      {
        name: 'App 4',
        icon: 'icon',
        url: 'https://www.google.com'
      }
    ]
  }
});
const categorySelected = ref('All Applications');
const filter = ref('');

const setMenu = async () => {
  const data = JSON.parse(await $vsk.getMenuData());
  menuData.value = data;
};

const logoutF = async () => {
  await $vsk.logout();
  $vsk.exit();
};

const shutdownF = async () => {
  await $vsk.shutdown();
  $vsk.exit();
};

const rebootF = async () => {
  await $vsk.reboot();
  $vsk.exit();
};

const suspendF = async () => {
  await $vsk.suspend();
  $vsk.exit();
};

const apps = computed(() => (menuData.value as any)['All Applications']?.apps);
const appsOfCategory = computed(() => (menuData.value as any)[categorySelected.value]?.apps);

onMounted(() => {
  setMenu();
  $vsk.loadUIConfig();
});
</script>

<template>
  <UserInfo />
  <SearchComponent v-model:filter="filter" />
  <div class="hydriam-session">
    <SessionButton title="Shutdown" :img="shutdown" @click="logoutF" />
    <SessionButton title="Reboot" :img="reboot" @click="shutdownF" />
    <SessionButton title="Logout" :img="logout" @click="rebootF" />
    <SessionButton title="Suspend" :img="suspend" @click="suspendF" />
  </div>

  <template v-if="filter !== ''">
    <FilterSection v-model:apps="apps" v-model:filter="filter" />
  </template>
  <template v-else>
    <MenuSection v-model:apps="appsOfCategory" />

    <div class="hydriam-widgets">
      <WeatherWidget />
    </div>

    <div class="hydriam-categories">
      <CategoryPill
        v-for="(value, key) in menuData"
        :key="key"
        :category="key"
        :image="value.icon"
        :description="value.description"
        v-model:categorySelected="categorySelected"
      />
    </div>
  </template>
</template>
