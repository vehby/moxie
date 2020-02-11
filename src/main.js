import Vue from 'vue'


// Application imports
import App from './App.vue'
import router from './router'

// Plugins
import VueGoogleCharts from 'vue-google-charts'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(VueGoogleCharts)

new Vue({
  router,
  vuetify,
  VueGoogleCharts,

  render: h => h(App)
}).$mount('#app');