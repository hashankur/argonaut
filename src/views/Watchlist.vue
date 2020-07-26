<template>
  <div class="ion-page" id="tab2">
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
        <ion-title>Watchlist</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-fab
      vertical="bottom"
      horizontal="end"
      slot="fixed"
      v-show="hasContent"
    >
      <ion-fab-button>
        <ion-icon name="help"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-content padding color="dark">
      <div class="placeholder-img" v-show="showImg">
        <ion-img src="img/stuff/clip-list-is-empty.png"></ion-img>
        <p class="placeholder-text">
          Tap on <i>add to watchlist </i>
          <ion-icon name="checkmark-circle-outline"></ion-icon>
          to add items to this list
        </p>
      </div>
      <ion-list-header v-show="hasContent">
        <ion-label color="secondary"> Movies </ion-label>
      </ion-list-header>
      <ion-item-sliding v-for="(wishMov, i) in watchlistMov" :key="'mov' + i">
        <ion-item color="dark">
          <ion-img
            class="ion-padding-end ion-padding-top ion-padding-bottom thumb"
            :src="'https://image.tmdb.org/t/p/w92' + wishMov.poster_path"
          ></ion-img>
          <ion-label>
            <h2>
              {{ wishMov.title }}
            </h2>
            <p>
              {{ wishMov.release_date | year }} &bull;
              {{ wishMov.vote_average }} &#9733;
            </p>
          </ion-label>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="primary">Remind</ion-item-option>
        </ion-item-options>
        <ion-item-options side="end">
          <ion-item-option color="danger">Delete</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
      <ion-list-header v-show="hasContent">
        <ion-label color="secondary"> TV </ion-label>
      </ion-list-header>
      <ion-item-sliding v-for="(wishTV, i) in watchlistTV" :key="'tv' + i">
        <ion-item color="dark">
          <ion-img
            class="ion-padding-end ion-padding-top ion-padding-bottom thumb"
            :src="'https://image.tmdb.org/t/p/w92' + wishTV.poster_path"
          ></ion-img>
          <ion-label>
            <h2>
              {{ wishTV.name }}
            </h2>
            <p>
              {{ wishTV.first_air_date | year }} &bull;
              {{ wishTV.vote_average }} &#9733;
            </p>
          </ion-label>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="primary">Remind</ion-item-option>
        </ion-item-options>
        <ion-item-options side="end">
          <ion-item-option color="danger">Delete</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  data() {
    return {
      watchlistMov: [],
      watchlistTV: [],
      hasContent: true,
      showImg: false
    };
  },
  methods: {
    routerSearch() {
      this.$router.push({ name: 'search' });
    }
  },
  mounted() {
    this.watchlistMov = JSON.parse(localStorage.getItem('watchlistMov'));
    this.watchlistTV = JSON.parse(localStorage.getItem('watchlistTV'));

    if (this.watchlistMov == null || this.watchlistTV == null) {
      this.hasContent = false;
      if (this.watchlistMov == null && this.watchlistTV == null) {
        this.showImg = true;
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

<style scoped>
.thumb {
  width: 70px;
  height: auto;
}
.placeholder-img {
  max-height: 50%;
  max-width: 80%;
  margin: 15vh auto 0px;
  pointer-events: none;
}
.placeholder-text {
  text-align: center;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.25em;
  padding: 2em;
  color: #aaaaaa;
}
</style>
