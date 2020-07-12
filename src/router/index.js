import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  base: "/",
  routes: [
    {
      path: "/root",
      component: () => import("@/views/TabRoot.vue"),
      children: [
        {
          path: "tab1",
          name: "tab1",
          components: {
            tab1Route: () => import("@/views/Tab1.vue"),
          },
        },
        {
          path: "tab1/details",
          name: "tab1-details",
          components: {
            tab1Route: () => import("@/views/Tab1Details.vue"),
          },
        },
        {
          path: "tab2",
          name: "tab2",
          components: {
            tab2Route: () => import("@/views/Tab2.vue"),
          },
        },
      ],
    },
    { path: "/", redirect: "root/tab1" },
  ],
});
