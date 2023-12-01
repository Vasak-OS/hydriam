<script lang="ts">
import { defineComponent } from 'vue';
import SearchComponent from '@/components/SearchComponent.vue';
import MenuSection from '@/components/section/MenuSection.vue';
import FilterTab from '@/components/tab/FilterTab.vue';
import UserInfo from '@/components/UserInfo.vue';

const menuData = {
  'Category 1': {
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
      menuData
    };
  },
  created() {
    this.setMenu();
  },
  methods: {
    async setMenu() {
      this.menuData = JSON.parse(await (this as any).$vsk.getMenuData());
      console.log(this.menuData);
    }
  },
  computed: {
    apps() {
      let apps: Object[] = [];
      for (let category in this.menuData) {
        // @ts-ignore
        const appMenu = this.menuData[category];
        apps = apps.concat(appMenu['apps']);
      }
      return apps;
    }
  },
  components: {
    SearchComponent,
    MenuSection,
    FilterTab,
    UserInfo
  }
});
</script>

<template>
  <div class="row">
    <div class="col-md-3">
      <UserInfo />
    </div>
    <div class="col-md-9">
      <SearchComponent v-model:filter="filter" />
      <template v-if="filter !== ''">
        <FilterTab :apps="apps" :filter="filter" />
      </template>
      <template v-else>
        <MenuSection :menuData="menuData" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
