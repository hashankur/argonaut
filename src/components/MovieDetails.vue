<template>
  <div>
    <ion-fab vertical="top" horizontal="end">
      <ion-fab-button>
        <ion-icon name="share"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-img
      :src="'https://image.tmdb.org/t/p/w300' + movieShow.backdrop_path"
    ></ion-img>
    <div class="ion-padding">
      <div class="topBox">
        <ion-text color="primary">
          <h1>
            {{ movieShow.title }}
          </h1>
          <span> {{ movieShow.release_date | year }} </span>
          <span> {{ movieShow.vote_average }} </span>
          <span>
            {{ movieShow.original_language.toUpperCase() }}
          </span>
        </ion-text>
        <br />
        <ion-label> {{ movieShow.overview }} </ion-label>
        <p>{{ movieShow.genre_ids }}</p>
      </div>
      <div class="reviews">
        <ion-text color="tertiary">
          <h1>Reviews</h1>
        </ion-text>
        <div>
          <span v-if="(reviews == '')">
            We don't have any reviews for
            {{ movieShow.title }}
          </span>
          <p
            class="item"
            v-for="(review, index) in reviews"
            :key="index"
            @click="selectedTitle(popTV)"
          >
            {{ review.author }} <br />
            {{ shorten(review.content, 100) }}
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieShow: []
    };
  },
  props: {
    reviews: Array,
    shorten: Function
  },
  created() {
    this.movieShow = this.$route.params.selectedMovie;
  },
  filters: {
    year: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.substring(0, 4);
    }
  }
};
</script>

<style></style>
