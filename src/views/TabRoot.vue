<template>
  <div class="ion-page">
    <ion-tabs>
      <ion-tab
        tab="home"
        :routes="['home', 'details', 'cast&Reviews']"
        :to="{ name: 'home' }"
      >
        <ion-vue-router name="homeRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab
        tab="discover"
        :routes="['discover', 'popular']"
        :to="{ name: 'discover' }"
      >
        <ion-vue-router name="discoverRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="wishlist">
        <ion-vue-router name="wishlistRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="people">
        <ion-vue-router name="peopleRoute"></ion-vue-router>
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

        <ion-tab-button tab="wishlist" :to="{ name: 'wishlist' }">
          <ion-icon name="list-box" />
          <ion-label>Wishlist</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="people" :to="{ name: 'people' }">
          <ion-icon name="person" />
          <ion-label>People</ion-label>
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
