import Vue from 'vue'


// Application imports
import App from './App.vue'
import router from './router'

// Plugins
import VueGoogleCharts from './plugins/vue-google-charts'
import vuetify from './plugins/vuetify';
import datetimepicker from './plugins/datetimepicker';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueGoogleCharts,
  datetimepicker,
  render: h => h(App)
}).$mount('#app');