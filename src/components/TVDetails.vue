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
          <span> {{ tvShow.first_air_date | year }} </span> &bull;
          <span>
            {{ tvShow.original_language.toUpperCase() }}
          </span>
          &bull; <span> {{ tvShow.vote_average }} </span> &#9733;
        </ion-text>
        <hr />
        <ion-button fill="clear" @click="clickYoutube()">
          <ion-icon slot="start" name="logo-youtube"></ion-icon>
          <ion-label> Trailer </ion-label>
        </ion-button>
        <ion-button fill="clear" @click="addWishlist()">
          <ion-icon slot="start" name="checkmark-circle-outline"></ion-icon>
          <ion-label> Watchlist </ion-label>
        </ion-button>
        <hr />
        <ion-label> {{ tvShow.overview }} </ion-label>
        <hr />
        <ion-chip v-for="(genre, index) in tvShow.genre_ids" :key="index">
          <ion-label color="light">{{ getGenre(genre) }}</ion-label>
        </ion-chip>
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
import genres from '@/data/tvGenres.json';

export default {
  data() {
    return {
      genres,
      tvShow: [],
      youtube: [],
      ytQuery: null,
      trailerUrlPath: null
    };
  },
  props: {
    reviews: Array,
    shorten: Function
  },
  created() {
    if (localStorage.tvShow.name == this.$route.params.name) {
      this.tvShow = JSON.parse(localStorage.getItem('tvShow'));
    } else {
      this.tvShow = this.$route.params.selectedTV;
      const parsed = JSON.stringify(this.$route.params.selectedTV);
      localStorage.setItem('tvShow', parsed);
    }
  },
  methods: {
    getGenre(value) {
      return genres.find((genre) => genre.id === value).name;
    },
    clickYoutube() {
      this.ytQuery = this.tvShow.name;
      this.ytQuery.replace(/\s+/g, '+').toLowerCase();

      fetch(
        'https://www.googleapis.com/youtube/v3/search?part=id&q=trailer+' +
          this.ytQuery +
          '&type=video&fields=items%2Fid&key=' +
          process.env.VUE_APP_YOUTUBE
      )
        .then((response) => response.json()) // one extra step
        .then((data) => {
          this.youtube = data.items; // Bcz, JSON gives data from the 'items' array
          this.trailerUrlPath =
            'www.youtube.com/watch?v=' + this.youtube[0].id.videoId;

          if (/Android/i.test(navigator.userAgent)) {
            // If the user is using an Android device.
            window.location = 'vnd.youtube://' + this.trailerUrlPath;
          } else {
            window.location = 'https://' + this.trailerUrlPath;
          }
        })
        // eslint-disable-next-line
        .catch((error) => console.error(error));
    },
    addWishlist() {
      var existingWishlist =
        JSON.parse(localStorage.getItem('watchlistTV')) || [];
      if (
        existingWishlist.find(
          (existingWishlist) => existingWishlist.name === this.tvShow.name
        )
      ) {
        const toast = document.createElement('ion-toast');
        toast.message = 'Already in watchlist';
        toast.duration = 1000;
        toast.color = 'danger';
        document.body.appendChild(toast);
        return toast.present();
      } else {
        const addToWishlist = this.tvShow;
        existingWishlist.push(addToWishlist);
        localStorage.setItem('watchlistTV', JSON.stringify(existingWishlist));
        const toast = document.createElement('ion-toast');
        toast.message = 'Added to watchlist';
        toast.duration = 1000;
        toast.color = 'primary';
        document.body.appendChild(toast);
        return toast.present();
      }
    }
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
