<script lang="ts">
import { defineComponent } from 'vue';
import SearchComponent from '@/components/SearchComponent.vue';
import MenuSection from '@/components/section/MenuSection.vue';
import FilterSection from '@/components/section/FilterSection.vue';
import UserInfo from '@/components/UserInfo.vue';
import SessionButton from '@/components/button/SessionButton.vue';
import CategoryPill from '@/components/button/CategoryPill.vue';

import shutdown from '@/assets/img/shutdown.svg';
import reboot from '@/assets/img/reboot.svg';
import logout from '@/assets/img/logout.svg';
import suspend from '@/assets/img/suspend.svg';

const menuExternalData = {
  'Category 1': {
    icon: 'icon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
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
};

export default defineComponent({
  name: 'App',
  data() {
    return {
      filter: '',
      menuExternalData,
      shutdown,
      reboot,
      logout,
      suspend
    };
  },
  created() {
    this.setMenu();
  },
  methods: {
    async setMenu() {
      this.menuExternalData = JSON.parse(await (this as any).$vsk.getMenuData());
    },
    async logoutF() {
      await (this as any).$vsk.logout();
      (this as any).$vsk.exit();
    },
    async shutdownF() {
      await (this as any).$vsk.shutdown();
      (this as any).$vsk.exit();
    },
    async rebootF() {
      await (this as any).$vsk.reboot();
      (this as any).$vsk.exit();
    },
    async suspendF() {
      await (this as any).$vsk.suspend();
      (this as any).$vsk.exit();
    }
  },
  computed: {
    apps() {
      let apps: Object[] = [];
      for (let category in this.menuExternalData) {
        // @ts-ignore
        const appMenu = this.menuExternalData[category];
        apps = apps.concat(appMenu['apps']);
      }
      return apps;
    },
    menuData() {
      return this.menuExternalData;
    }
  },
  components: {
    SearchComponent,
    MenuSection,
    FilterSection,
    UserInfo,
    SessionButton,
    CategoryPill
  }
});
</script>

<template>
  <div class="row">
    <div class="col-md-4">
      <UserInfo />
    </div>
    <div class="col-md-4">
      <SearchComponent v-model:filter="filter" />
    </div>
    <div class="col-md-4">
      <SessionButton title="Shutdown" :img="shutdown" @click="logoutF" />
      <SessionButton title="Reboot" :img="reboot" @click="shutdownF" />
      <SessionButton title="Logout" :img="logout" @click="rebootF" />
      <SessionButton title="Suspend" :img="suspend" @click="suspendF" />
    </div>

    <template v-if="filter !== ''">
      <div class="col-12">
        <FilterSection :apps="apps" :filter="filter" />
      </div>
    </template>
    <template v-else>
      <div class="col-md-4">
        <MenuSection :menuData="menuData" />
      </div>

      <div class="col-md-4"></div>
      <div class="col-md-4">
        <ul class="nav" id="menu-category" role="tablist">
          <template v-for="(value, key) in menuData" :key="key">
            <CategoryPill :category="key" :image="value.icon" :description="value.description" />
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
