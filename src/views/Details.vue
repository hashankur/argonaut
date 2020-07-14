<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon
              slot="icon-only"
              name="checkmarkCircleOutline
"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content padding color="dark">
      <ion-img
        :src="
          'https://image.tmdb.org/t/p/w300' + $route.params.trend.backdrop_path
        "
      ></ion-img>
      <div class="ion-padding">
        <div class="topBox">
          <ion-text color="primary">
            <h1 v-if="$route.params.trend.title != ''">
              {{ $route.params.trend.title }}
            </h1>
            <h1 v-if="$route.params.trend.name != ''">
              {{ $route.params.trend.name }}
            </h1>
            <span> {{ $route.params.trend.release_date | year }} </span>
            <span> {{ $route.params.trend.vote_average }} </span>
            <span>
              {{ $route.params.trend.original_language.toUpperCase() }}
            </span>
          </ion-text>
          <br />
          <ion-label> {{ $route.params.trend.overview }} </ion-label>
          <p>{{ $route.params.trend.genre_ids }}</p>
        </div>
      </div>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Details',
  methods: {},
  filters: {
    year: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.substring(0, 4);
    }
  }
};
</script>

<style scoped>
.topBox,
span {
  text-align: left;
}
</style>
