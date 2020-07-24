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
    <ion-content padding color="dark">
      <ion-row>
        <ion-col size="6" v-for="(person, index) in people" :key="index">
          <ion-img
            :src="'https://image.tmdb.org/t/p/w185' + person.profile_path"
          ></ion-img>
        </ion-col>
      </ion-row>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'People',
  data() {
    return {
      people: []
    };
  },
  methods: {
    peopleSearch() {
      this.$router.push({ name: 'search' });
    }
  },
  mounted() {
    fetch(
      'https://api.themoviedb.org/3/person/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.people = data.results; // Bcz, JSON gives data from the 'genres' array
      })
      // eslint-disable-next-line
      .catch((error) => console.error(error));
  }
};
</script>

<style></style>
