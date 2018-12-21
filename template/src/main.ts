import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index'
import '@/registerServiceWorker'
import RenderIf from 'vue-render-if'

// @ts-ignore
Vue.component('render-if', RenderIf)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
