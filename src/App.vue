<template>
  <div id="app">
    <side-menu />
    <ion-app id="sideMenu">
      <ion-vue-router main />
    </ion-app>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import { Plugins } from '@capacitor/core';
const { Network } = Plugins;

export default {
  name: 'app',
  components: {
    SideMenu
  },
  mounted() {
    let handler = Network.addListener('networkStatusChange', (status) => {
      if (status.connected == false) {
        this.presentAlert();
      } else {
        this.networkStatus(
          'You are back online ' + `(${status.connectionType.toUpperCase()})`,
          'success',
          'OK'
        );
      }
    });
    let status = Network.getStatus();
  },
  methods: {
    presentAlert() {
      return this.$ionic.alertController
        .create({
          header: 'You are offline',
          message:
            "Filmroll requires a working internet connection, which you don't have at the moment.",
          buttons: ['OK'],
          backdropDismiss: false
        })
        .then((a) => a.present());
    },
    networkStatus(message, color, buttonText) {
      const toast = document.createElement('ion-toast');
      toast.message = message;
      toast.color = color;
      toast.duration = 3000;
      document.body.appendChild(toast);
      return toast.present();
    }
  }
};
</script>

<style>
#app {
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
ion-navbar.toolbar.toolbar-ios.statusbar-padding,
ion-navbar.toolbar-ios ion-title.title-ios,
ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
ion-toolbar.toolbar-ios ion-title.title-ios {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
</style>
