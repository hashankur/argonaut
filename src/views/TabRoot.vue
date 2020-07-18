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

      <ion-tab tab="search">
        <ion-vue-router name="searchRoute"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="wishlist">
        <ion-vue-router name="wishlistRoute"></ion-vue-router>
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

        <ion-tab-button tab="search" :to="{ name: 'search' }">
          <ion-icon name="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="wishlist" :to="{ name: 'wishlist' }">
          <ion-icon name="list-box" />
          <ion-label>Wishlist</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
import {
  home,
  compass,
  listBox,
  search,
  add,
  share,
  checkmarkCircleOutline,
  film,
  tv
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'ios-home': home.ios,
  'md-home': home.md,
  'ios-list-box': listBox.ios,
  'md-list-box': listBox.md,
  'ios-compass': compass.ios,
  'md-compass': compass.md,
  'ios-add': add.ios,
  'md-add': add.md,
  'ios-search': search.ios,
  'md-search': search.md,
  'ios-share': share.ios,
  'md-share': share.md,
  'ios-checkmark-circle-outline ': checkmarkCircleOutline.ios,
  'md-checkmark-circle-outline': checkmarkCircleOutline.md,
  'ios-tv': tv.ios,
  'md-tv': tv.md,
  'ios-film': film.ios,
  'md-film': film.md
});
export default {
  name: 'TabRoot',
  props: {}
};
</script>
