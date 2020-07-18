<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button @click="peopleSearch">
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>People</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark"> </ion-content>
  </div>
</template>

<script>
export default {
  name: 'People',
  methods: {
    peopleSearch() {
      this.$router.push({ name: 'search' });
    }
  }
};
</script>

<style></style>
