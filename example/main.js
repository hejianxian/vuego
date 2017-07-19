import Vue from 'vue';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import VueRouter from 'vue-router';
import routersConfig from './routers';
import App from './App';
import Vuego from '../src/index';
import packages from './install-packages';

Vue.use(VueRouter);
Vue.use(Vuego);

// install packages
Vue.use(packages.photoBrowser);
Vue.use(packages.slider);

const router = new VueRouter(routersConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
