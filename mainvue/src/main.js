import Vue from 'vue';
import Antd from 'ant-design-vue';
import { registerMicroApps } from 'qiankun';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import 'ant-design-vue/dist/antd.css';

// 启动 qiankun
Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
registerMicroApps([
  {
    name: 'testvue',
    entry: '//localhost:8081',
    container: '#appContainer',
    activeRule: '/sonApp',
  },
]);
