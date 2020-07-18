<template>
  <div class="ion-page">
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
        <ion-title>Discover</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark">
      <ion-list-header>
        <ion-label>Popular People</ion-label>
        <ion-button fill="clear" size="small" @click="popularExp()">
          See More
        </ion-button>
      </ion-list-header>
      <div class="app">
        <ul class="hs full no-scrollbar">
          <li class="item" v-for="(person, index) in people" :key="index">
            <img
              :src="'https://image.tmdb.org/t/p/w45' + person.profile_path"
            />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label>Genres</ion-label>
        <ion-button fill="clear" size="small" @click="popularExp()">
          See More
        </ion-button>
      </ion-list-header>
      <div class="app">
        <ul class="hs full no-scrollbar">
          <li class="item" v-for="(genre, index) in genres" :key="index">
            {{ genre.name }}
          </li>
        </ul>
      </div>
    </ion-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [],
      people: []
    };
  },

  methods: {
    routerSearch() {
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

    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.genres = data.genres; // Bcz, JSON gives data from the 'genres' array
      })
      // eslint-disable-next-line
      .catch((error) => console.error(error));
  }
};
</script>

<style scoped>
:root {
  --gutter: 20px;
}

.app {
  padding: var(--gutter) 0;
  display: grid;
  grid-gap: var(--gutter) 0;
  grid-template-columns: var(--gutter) 1fr var(--gutter);
  align-content: start;
}

.app > * {
  grid-column: 2 / -2;
}

.app > .full {
  grid-column: 1 / -1;
}

.hs {
  display: grid;
  grid-gap: calc(var(--gutter) / 2);
  grid-template-columns: 10px;
  grid-template-rows: minmax(150px, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: calc(50% - var(--gutter) * 2);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(0.75 * var(--gutter));
  margin-bottom: calc(-0.25 * var(--gutter));
}

.hs:before,
.hs:after {
  content: '';
  width: 10px;
}

/* Demo styles */

html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  background: #456173;
}

img {
  border-radius: 6px;
}

ul {
  list-style: none;
  padding: 0;
}

h1,
h2,
h3 {
  margin: 0;
}

.hs > li,
.item {
  scroll-snap-align: center;
  padding: calc(var(--gutter) / 2 * 1.5);
  margin: 0 0.25rem 0 0;
  min-width: 45px;
  max-height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(226, 0, 0);
  border-radius: 8px;
}

.no-scrollbar {
  scrollbar-width: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
