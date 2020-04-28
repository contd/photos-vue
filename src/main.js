import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.scss'
import './assets/corpus.scss'

Vue.use(VueSilentbox)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
