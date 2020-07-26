import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.get['Accept'] = 'application/json';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
