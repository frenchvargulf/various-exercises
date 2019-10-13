import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'

Vue.config.productionTip = false
Vue.use(SuiVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

