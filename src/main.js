import Vue from 'vue'
import App from './App.vue'
import ProgressBar from '@/components/ProgresBar/ProgressBar.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.component('ProgressBar',ProgressBar)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
