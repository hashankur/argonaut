<template>
  <div id="app">
    <ion-app>
      <ion-vue-router main />
    </ion-app>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core';
const { Network } = Plugins;

export default {
  name: 'app',
  mounted() {
    //let handler = Network.addListener('networkStatusChange', (status) => {
    //  console.log('Network status changed', status);
    // });
    // To stop listening:
    // handler.remove();
    // Get the current network status
    //* let status = await Network.getStatus();
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
