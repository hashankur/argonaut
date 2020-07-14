<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Popular Movies</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-label>This is the details page</ion-label>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Popular',
  methods: {
    nextPage() {
      this.$router.push('/geo-location-page');
    }
  },
  onCreate() {}
};
</script>

<style></style>
