import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';
import store from './store';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
