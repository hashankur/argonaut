<template>
  <div>
    <ion-img
      :src="'https://image.tmdb.org/t/p/w300' + movieShow.backdrop_path"
    ></ion-img>
    <div class="ion-padding">
      <div>
        <ion-text color="primary">
          <h1>
            {{ movieShow.title }}
          </h1>
          <span> {{ movieShow.release_date | year }} </span> &bull;
          <span> {{ movieShow.original_language.toUpperCase() }} </span>
          &bull; <span> {{ movieShow.vote_average }} </span> &#9733;
        </ion-text>
        <hr />
        <ion-button fill="clear" @click="clickYoutube()">
          <ion-icon slot="icon-only" name="logo-youtube"></ion-icon>
          <span> &nbsp; Trailer </span>
        </ion-button>
        <ion-button fill="clear" @click="onClick()">
          <ion-icon slot="icon-only" name="share"></ion-icon>
        </ion-button>
        <ion-button fill="clear" @click="addWishlist">
          <ion-icon slot="icon-only" name="checkmark-circle-outline"></ion-icon>
        </ion-button>
        <hr />
        <ion-label> {{ movieShow.overview }} </ion-label>
        <hr />
        <ion-chip v-for="(genre, index) in movieShow.genre_ids" :key="index">
          <ion-label color="light">{{ getGenre(genre) }}</ion-label>
        </ion-chip>
      </div>
      <div>
        <ion-button @click="castReviews">
          Click me
        </ion-button>
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
import genres from '@/data/movieGenres.json';

export default {
  data() {
    return {
      genres,
      movieShow: [],
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
    if (localStorage.movieShow.name == this.$route.params.name) {
      this.movieShow = JSON.parse(localStorage.getItem('movieShow'));
    } else {
      this.movieShow = this.$route.params.selectedMovie;
      const parsed = JSON.stringify(this.$route.params.selectedMovie);
      localStorage.setItem('movieShow', parsed);
    }
  },
  methods: {
    castReviews() {
      this.$router.push({ name: 'cast&Reviews' });
    },
    getGenre(value) {
      return genres.find((genre) => genre.id === value).name;
    },
    clickYoutube() {
      this.ytQuery = this.movieShow.title.replace(/\s+/g, '+').toLowerCase();

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
        JSON.parse(localStorage.getItem('wishlistMov')) || [];
      if (
        existingWishlist.find(
          (existingWishlist) => existingWishlist.title === this.movieShow.title
        )
      ) {
        const toast = document.createElement('ion-toast');
        toast.message = 'Already in wishlist';
        toast.duration = 2000;
        toast.color = 'danger';
        document.body.appendChild(toast);
        return toast.present();
      } else {
        const addToWishlist = this.movieShow;
        existingWishlist.push(addToWishlist);
        localStorage.setItem('wishlistMov', JSON.stringify(existingWishlist));
        const toast = document.createElement('ion-toast');
        toast.message = 'Added to wishlist';
        toast.duration = 2000;
        toast.color = 'primary';
        document.body.appendChild(toast);
        return toast.present();
      }
    },
    inWishlist() {
      return {
        primary: this.content['cravings'],
        success: !this.content['cravings']
      };
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
