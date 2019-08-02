import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ui
import 'muse-ui/dist/muse-ui.css'
import MuseUI from 'muse-ui'
import Helpers from 'muse-ui/lib/Helpers'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import Loading from 'muse-ui-loading'
import Message from 'muse-ui-message'
import 'muse-ui-message/dist/muse-ui-message.css'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(Loading)
Vue.use(Message)
Vue.use(Helpers)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
