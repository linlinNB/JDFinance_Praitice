import Vue from "vue";
import Router from 'vue-router';

// 引入当前默认组件
import Home from '../home/index.vue';

Vue.use(Router);

// 导出相关的配置文件
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }]
})