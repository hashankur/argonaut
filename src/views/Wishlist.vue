<template>
  <div class="ion-page" id="tab2">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button @click="routerSearch">
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Wishlist</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-content padding color="dark">
      <ion-text color="primary">
        <h1>Movies</h1>
      </ion-text>
      <ion-item-sliding v-for="(wishMov, i) in wishlistMov" :key="'mov' + i">
        <ion-item color="dark">
          <ion-label> {{ wishMov.title }} </ion-label>
          <ion-label> {{ wishMov.release_date }} </ion-label>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="primary">Remind</ion-item-option>
        </ion-item-options>
        <ion-item-options side="end">
          <ion-item-option color="danger">Delete</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
      <ion-text color="primary">
        <h1>TV</h1>
      </ion-text>
      <ion-item-sliding v-for="(wishTV, i) in wishlistTV" :key="'tv' + i">
        <ion-item color="dark">
          <ion-label> {{ wishTV.name }} </ion-label>
          <ion-label> {{ wishTV.release_date }} </ion-label>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="primary">Remind</ion-item-option>
        </ion-item-options>
        <ion-item-options side="end">
          <ion-item-option color="danger">Delete</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  data() {
    return {
      wishlistMov: [],
      wishlistTV: []
    };
  },
  methods: {
    routerSearch() {
      this.$router.push({ name: 'search' });
    }
  },
  mounted() {
    this.wishlistMov = JSON.parse(localStorage.getItem('wishlistMov'));
    this.wishlistTV = JSON.parse(localStorage.getItem('wishlistTV'));
  }
};
</script>

<style></style>
