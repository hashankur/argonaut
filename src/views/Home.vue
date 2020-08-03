<template>
  <div class="ion-page" id="tab1">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title style="text-align: center;">Filmroll</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark">
      <ion-list-header>
        <ion-label color="secondary">Upcoming - In Theatres</ion-label>
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
            @click="selectedMovie(`${upMov.id}`, `${upMov.title}`, upMov)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + upMov.poster_path" />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label color="secondary">Trending</ion-label>
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
            @click="selectedMovie(`${trend.id}`, `${trend.title}`, trend)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + trend.poster_path" />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label color="secondary">Popular Movies</ion-label>
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
            @click="selectedMovie(`${popMov.id}`, `${popMov.title}`, popMov)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + popMov.poster_path" />
          </li>
        </ul>
      </div>

      <ion-list-header>
        <ion-label color="secondary">Popular TV</ion-label>
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
            @click="selectedTV(`${popTV.id}`, `${popTV.name}`, popTV)"
          >
            <img :src="'https://image.tmdb.org/t/p/w92' + popTV.poster_path" />
          </li>
        </ul>
      </div>
    </ion-content>
  </div>
</template>

<script>
import axios from 'axios';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
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
    selectedMovie(id, name, selectedMovie) {
      this.$router.push({
        name: 'details',
        params: { type: 'movie', id, name, selectedMovie }
      });
    },
    selectedTV(id, name, selectedTV) {
      this.$router.push({
        name: 'details',
        params: { type: 'tv', id, name, selectedTV }
      });
    },
    showExitConfirm() {
      this.alertController
        .create({
          header: 'App termination',
          message: 'Do you want to close the app?',
          backdropDismiss: false,
          buttons: [
            {
              text: 'Stay',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
              }
            },
            {
              text: 'Exit',
              handler: () => {
                navigator['app'].exitApp();
              }
            }
          ]
        })
        .then((alert) => {
          alert.present();
        });
    }
  },
  created() {
    localStorage.movieShow = null;
    localStorage.tvShow = null;

    App.addListener('backButton', function () {
      this.showExitConfirm();
    });
  },
  mounted() {
    let config = 'language=en-US&page=1';
    axios
      .all([
        axios.get(
          '/movie/upcoming?' + config + '&api_key=' + process.env.VUE_APP_TMDB
        ),
        axios.get(
          '/trending/movie/day?' +
            config +
            '&api_key=' +
            process.env.VUE_APP_TMDB
        ),
        axios.get(
          '/movie/popular?' + config + '&api_key=' + process.env.VUE_APP_TMDB
        ),
        axios.get(
          '/tv/popular?' + config + '&api_key=' + process.env.VUE_APP_TMDB
        )
      ])
      .then(
        axios.spread((upcoming, trending, popMov, popTV) => {
          this.upcoming = upcoming.data.results;
          this.trending = trending.data.results;
          this.popularMovies = popMov.data.results;
          this.popularTV = popTV.data.results;
        })
      );
  }
};
</script>

<style scoped src="@/assets/grid.css"></style>
