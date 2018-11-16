import Vue from 'vue';
import App from './App';
import router from './router';

// 进行相关配置
Vue.config.productionTip = false;// 表示当前的环境

// 对于组件、路由、模板的嵌套
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: "<App/>"
});