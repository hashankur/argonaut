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
      <ion-item-sliding v-for="(wish, index) in wishlist" :key="index">
        <ion-item color="dark">
          <ion-label> {{ wish.title }} </ion-label>
          <ion-label> {{ wish.release_date }} </ion-label>
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
      wishlist: []
    };
  },
  methods: {
    routerSearch() {
      this.$router.push({ name: 'search' });
    }
  },
  mounted() {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }
};
</script>

<style></style>
