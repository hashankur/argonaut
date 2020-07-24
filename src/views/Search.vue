/* eslint-disable */
<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <input
          type="text"
          v-model="query"
          @keyup="debounce($event.target.value, 250)"
        />
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark">
      <ion-list>
        <ion-item v-for="result in results" :key="result.id">
          <ion-avatar slot="start">
            <img :src="'http://image.tmdb.org/t/p/w92/' + result.poster_path" />
          </ion-avatar>
          <ion-label>
            <h4>{{ result.media_type }}</h4>
            <h2>
              <ion-icon slot="start" :name="icon"></ion-icon>
              {{ setIcon(result.title) }}
            </h2>
            <p>{{ result.overview }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
// eslint-disable-next-line
import _ from 'lodash';

export default {
  name: 'Search',
  data() {
    return {
      query: '',
      results: [],
      icon: null,
      value: null,
      searchInput: null
    };
  },
  methods: {
    setIcon(value) {
      if (value == 'movie') {
        this.icon = 'film';
      } else {
        this.icon = 'tv';
      }
    },
    debounce(query, debounceDuration = 300) {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
      }
      // eslint-disable-next-line
      this.timeoutId = setTimeout((_) => {
        this.getResult(query);
      }, debounceDuration);
    },
    getResult(query) {
      // ! Debounce
      fetch(
        'https://api.themoviedb.org/3/search/multi?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1&include_adult=false&query=' +
          query
      )
        .then((response) => response.json()) // one extra step
        .then((data) => {
          this.results = data.results; // Bcz, JSON gives data from the 'genres' array
        })
        // eslint-disable-next-line
        .catch((error) => console.error(error));
    }
  }
};
</script>

<style></style>
