<template>
  <div class="ion-page">
    <ion-tabs>
      <ion-tab tab="home" :routes="['home', 'details']" :to="{ name: 'home' }">
        <ion-vue-router name="homeRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab
        tab="discover"
        :routes="['discover', 'popular']"
        :to="{ name: 'discover' }"
      >
        <ion-vue-router name="discoverRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="watchlist">
        <ion-vue-router name="watchlistRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="home">
          <ion-icon name="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="discover" :to="{ name: 'discover' }">
          <ion-icon name="compass" />
          <ion-label>Discover</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="watchlist" :to="{ name: 'watchlist' }">
          <ion-icon name="list-box" />
          <ion-label>Watchlist</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

const currentIcons = Object.keys(allIcons).map((i) => {
  const key = i.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  if (typeof allIcons[i] === 'string') {
    return {
      [key]: allIcons[i]
    };
  }
  return {
    ['ios-' + key]: allIcons[i].ios,
    ['md-' + key]: allIcons[i].md
  };
});

const iconsObject = Object.assign({}, ...currentIcons);
addIcons(iconsObject);

export default {
  name: 'TabRoot',
  props: {}
};
</script>
