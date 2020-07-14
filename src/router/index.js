import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  base: '/',
  routes: [
    {
      path: '/root',
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
          path: 'home/details',
          name: 'details',
          components: {
            homeRoute: () => import('@/views/Details.vue')
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
          path: 'discover/search',
          name: 'search',
          components: {
            discoverRoute: () => import('@/views/Search.vue')
          }
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          components: {
            wishlistRoute: () => import('@/views/Wishlist.vue')
          }
        }
      ]
    },
    { path: '/', redirect: 'root/home' }
  ]
});
