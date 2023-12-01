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
      homePath: (this as any).$vsk.getHome(),
      shutdown,
      reboot,
      logout,
      suspend
    };
  },
  components: {
    SessionButton
  }
});
</script>

<template>
  <div id="user-info" class="text-center">
    <img
      :src="'file://' + homePath + '/.face'"
      class="img-fluid vsk-profile-picture user-img"
      id="user-img"
      alt="user"
    />
    <SessionButton title="Shutdown" :img="shutdown" cmd="systemctl poweroff" />
    <SessionButton title="Reboot" :img="reboot" cmd="systemctl reboot" />
    <SessionButton title="Logout" :img="logout" cmd="loginctl terminate-session $XDG_SESSION_ID" />
    <SessionButton title="Suspend" :img="suspend" cmd="systemctl suspend" />
  </div>
</template>
