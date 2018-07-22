import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './registerServiceWorker'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/assets/css/bulma.css'
import '../public/assets/css/app.css'
import '../public/assets/css/core_blue.css'
import '../public/assets/css/icons.min.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
