import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import vgl from 'vue-golden-layout';
import $ from 'jquery';

Vue.use(BootstrapVue);
Vue.use(vgl);

import 'golden-layout/src/css/goldenlayout-light-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
