import Vue from 'vue';
import App from './App';
import router from './router';
import VueLocalStorage from 'vue-localstorage';
require('@/assets/scss/prepends.scss');

Vue.config.productionTip = false;
Vue.use(VueLocalStorage);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})