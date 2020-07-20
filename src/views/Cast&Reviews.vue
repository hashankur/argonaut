<template>
  <div>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>People</ion-title>
      </ion-toolbar>
      <ion-toolbar color="dark">
        <ion-segment @ionChange="segmentChanged($event)" value="reviews">
          <ion-segment-button value="reviews">
            <ion-label>Reviews</ion-label>
          </ion-segment-button>
          <ion-segment-button value="cast">
            <ion-label>Cast</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark"> </ion-content>
  </div>
</template>

<script>
export default {
  name: 'CastReviews',
  methods: {
    segmentChanged(ev) {
      console.log('Segment changed', ev);
    }
  }
};
</script>

<style></style>
