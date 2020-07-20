import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  base: '/',
  routes: [
    {
      path: '/argonaut',
      component: () => import('@/views/TabRoot.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          components: {
            homeRoute: () => import('@/views/Home.vue')
          }
        },
        {
          path: 'home/:type/:id',
          name: 'details',
          components: {
            homeRoute: () => import('@/views/Details.vue')
          }
        },
        {
          path: 'home/:type/:id/cast&reviews',
          name: 'cast&Reviews',
          components: {
            homeRoute: () => import('@/views/Cast&Reviews.vue')
          }
        },
        {
          path: 'discover',
          name: 'discover',
          components: {
            discoverRoute: () => import('@/views/Discover.vue')
          }
        },
        {
          path: 'discover/popular',
          name: 'popular',
          components: {
            discoverRoute: () => import('@/views/Popular.vue')
          }
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          components: {
            wishlistRoute: () => import('@/views/Wishlist.vue')
          }
        },
        {
          path: 'people',
          name: 'people',
          components: {
            peopleRoute: () => import('@/views/People.vue')
          }
        },
        {
          path: 'people/search',
          name: 'search',
          components: {
            peopleRoute: () => import('@/views/Search.vue')
          }
        }
      ]
    },
    { path: '/', redirect: 'argonaut/home' }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
