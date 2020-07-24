<template>
  <ion-menu type="overlay" side="start" content-id="sideMenu">
    <ion-toolbar color="dark">
      <ion-title>Custom Menu</ion-title>
    </ion-toolbar>
    <ion-content color="dark">
      <ion-list color="dark">
        <ion-item color="dark" href="/">Home</ion-item>
        <ion-item color="dark" href="/category">Categories</ion-item>
        <ion-item color="dark" href="/about">About</ion-item>
        <ion-item color="dark" href="/settings">Settings</ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="shareMovie()">
          <ion-icon name="share"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-menu>
</template>

<script>
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

export default {
  name: 'SideMenu',
  methods: {
    shareMovie() {
      let shareRet = Share.share({
        text: 'Check out this awesome movie app!',
        url: 'http://adroit24.netlify.app/?ref=argonaut',
        dialogTitle: 'Share with buddies'
      });
    }
  }
};
</script>
