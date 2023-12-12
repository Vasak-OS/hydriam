<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserInfo',
  data() {
    return {
      homePath: ''
    };
  },
  methods: {
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
  </div>
</template>