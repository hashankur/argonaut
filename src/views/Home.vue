<template>
  <div class="ion-page" id="tab1">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Filmroll</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark">
      <ion-list-header>
        <ion-label>Upcoming - In Theatres</ion-label>
        <ion-button
          color="dark"
          fill="outline"
          size="small"
          @click="popularExp()"
        >
          Day
        </ion-button>
      </ion-list-header>
      <div class="app">
        <ul class="hs full no-scrollbar">
          <li
            class="item"
            v-for="(upMov, index) in upcoming"
            :key="index"
            @click="selectedMovie(`${upMov.id}`, upMov)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + upMov.poster_path" />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label>Trending</ion-label>
        <ion-button
          color="dark"
          fill="outline"
          size="small"
          @click="popularExp()"
        >
          Day
        </ion-button>
      </ion-list-header>
      <div class="app">
        <ul class="hs full no-scrollbar">
          <li
            class="item"
            v-for="(trend, index) in trending"
            :key="index"
            @click="selectedMovie(`${trend.id}`, trend)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + trend.poster_path" />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label>Popular Movies</ion-label>
        <ion-button
          color="dark"
          fill="outline"
          size="small"
          @click="popularExp()"
        >
          Day
        </ion-button>
      </ion-list-header>
      <div class="app">
        <ul class="hs full no-scrollbar">
          <li
            class="item"
            v-for="(popMov, index) in popularMovies"
            :key="index"
            @click="selectedMovie(`${popMov.id}`, popMov)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + popMov.poster_path" />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label>Popular TV</ion-label>
        <ion-button
          color="dark"
          fill="outline"
          size="small"
          @click="popularExp()"
        >
          Day
        </ion-button>
      </ion-list-header>
      <div class="app">
        <ul class="hs full no-scrollbar">
          <li
            class="item"
            v-for="(popTV, index) in popularTV"
            :key="index"
            @click="selectedTV(`${popTV.id}`, popTV)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + popTV.poster_path" />
          </li>
        </ul>
      </div>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      upcoming: [],
      trending: [],
      popularMovies: [],
      popularTV: []
    };
  },
  methods: {
    popularExp() {
      this.$router.push({ name: 'popular' });
    },
    selectedMovie(id, selectedMovie) {
      this.$router.push({
        name: 'details',
        params: { type: 'movie', id, selectedMovie }
      });
    },
    selectedTV(id, selectedTV) {
      this.$router.push({
        name: 'details',
        params: { type: 'tv', id, selectedTV }
      });
    }
  },
  mounted() {
    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.upcoming = data.results; // Bcz, JSON gives data from the 'genres' array
      })
      // eslint-disable-next-line
      .catch((error) => console.error(error));

    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.trending = data.results; // Bcz, JSON gives data from the 'results' array
      })
      // eslint-disable-next-line
      .catch((error) => console.error(error));

    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.popularMovies = data.results; // Bcz, JSON gives data from the 'genres' array
      })
      // eslint-disable-next-line
      .catch((error) => console.error(error));

    fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.popularTV = data.results; // Bcz, JSON gives data from the 'genres' array
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
  min-width: 92px;
  max-height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
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
