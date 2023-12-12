import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const startApp = (channel: any) => {
  document.onkeydown = (e) => {
    if (e.key === 'Escape') {
      channel.objects.vsk.exit();
    }
  };

  const app = createApp(App);
  app.config.globalProperties.$vsk = channel.objects.vsk;
  app.use(createPinia());

  app.mount('#menu');
};

// @ts-ignore
new QWebChannel(qt.webChannelTransport, startApp);
