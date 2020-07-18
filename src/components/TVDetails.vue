<template>
  <div>
    <ion-img
      :src="'https://image.tmdb.org/t/p/w300' + tvShow.backdrop_path"
    ></ion-img>
    <div class="ion-padding">
      <div>
        <ion-text color="primary">
          <h1>
            {{ tvShow.name }}
          </h1>
          <span> {{ tvShow.release_date | year }} </span>
          <span> {{ tvShow.vote_average }} </span>
          <span>
            {{ tvShow.original_language.toUpperCase() }}
          </span>
        </ion-text>
        <br />
        <ion-label> {{ tvShow.overview }} </ion-label>
        <p>{{ tvShow.genre_ids }}</p>
      </div>
      <div>
        <ion-text color="tertiary">
          <h1>Reviews</h1>
        </ion-text>
        <div>
          <span v-if="(reviews == '')">
            We don't have any reviews for {{ tvShow.name }}
          </span>
          <p class="item" v-for="(review, index) in reviews" :key="index">
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
      tvShow: []
    };
  },
  props: {
    reviews: Array,
    shorten: Function
  },
  created() {
    this.tvShow = this.$route.params.selectedTV;
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
