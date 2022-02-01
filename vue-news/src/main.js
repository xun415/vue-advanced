import Vue from 'vue'
import App from './App.vue'
import {router} from './routers/index'


/* main.js는 앱의 설정과 구조를 파악할 수 있는 청사진의 역할을 하는것이 좋다. */
// >> router 등록은 따로 등록 후 임포트

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
