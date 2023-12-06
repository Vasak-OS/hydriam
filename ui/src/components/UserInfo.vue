<script lang="ts">
import { defineComponent } from 'vue';
import shutdown from '@/assets/img/shutdown.svg';
import reboot from '@/assets/img/reboot.svg';
import logout from '@/assets/img/logout.svg';
import suspend from '@/assets/img/suspend.svg';
import SessionButton from '@/components/button/SessionButton.vue';

export default defineComponent({
  name: 'UserInfo',
  data() {
    return {
      shutdown,
      reboot,
      logout,
      suspend,
      homePath: ''
    };
  },
  methods: {
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
    },
    async setHomePath() {
      this.homePath = await (this as any).$vsk.getHome();
    }
  },
  computed:{
    profilePicture() {
      return `file://${this.homePath}/.face`;
    }
  },
  created() {
    this.setHomePath();
  },
  components: {
    SessionButton
  }
});
</script>

<template>
  <div id="user-info" class="text-center">
    <img
      :src="profilePicture"
      class="img-fluid vsk-profile-picture user-img"
      id="user-img"
      alt="user"
    />
    <SessionButton title="Shutdown" :img="shutdown" @click="logoutF" />
    <SessionButton title="Reboot" :img="reboot" @click="shutdownF" />
    <SessionButton title="Logout" :img="logout" @click="rebootF" />
    <SessionButton title="Suspend" :img="suspend" @click="suspendF" />
  </div>
</template>
