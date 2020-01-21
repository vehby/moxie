import Vue from 'vue'


// Application imports
import App from './App.vue'
import router from './router'
import store from './store';

// Plugins
import VueGoogleCharts from './plugins/vue-google-charts'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueGoogleCharts,
  render: h => h(App)
}).$mount('#app');