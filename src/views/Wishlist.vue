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
      <ion-list>
        <ion-item-sliding>
          <ion-item>
            <ion-label>New Trendy Movie</ion-label>
          </ion-item>

          <ion-item-options side="start">
            <ion-item-option color="primary">Remind</ion-item-option>
          </ion-item-options>

          <ion-item-options side="end">
            <ion-item-option color="danger">Delete</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  methods: {
    routerSearch() {
      this.$router.push({ name: 'search' });
    }
  }
};
</script>

<style></style>
