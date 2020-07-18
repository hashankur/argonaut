<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content padding color="dark">
      <component
        :is="currentComponent"
        :reviews="reviews"
        :shorten="shorten"
      ></component>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Details',
  components: {
    movie: () => import('@/components/MovieDetails'),
    tv: () => import('@/components/TVDetails')
  },
  data() {
    return {
      currentComponent: null,
      reviews: []
    };
  },
  methods: {
    // Shorten a string to less than maxLen characters without truncating words.
    shorten(str, maxLen, separator = ' ') {
      if (str.length <= maxLen) return str;
      return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
    }
  },
  created() {
    this.currentComponent = this.$route.params.type;
  },
  mounted() {
    fetch(
      'https://api.themoviedb.org/3/' +
        this.currentComponent +
        '/' +
        this.$route.params.id +
        '/reviews?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1'
    )
      .then((response) => response.json()) // one extra step
      .then((data) => {
        this.reviews = data.results; // Bcz, JSON gives data from the 'genres' array
      })
      // eslint-disable-next-line
      .catch((error) => console.error(error));
  }
};
</script>
