import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
// import moment from 'moment'

// Vue.prototype.moment = moment;
// eslint-disable-next-line
import styles from './assets/styles/index.scss'
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
