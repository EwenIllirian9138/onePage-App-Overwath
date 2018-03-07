import Vue from 'vue';
import VueRouter from 'vue-router';
import MachineList from './components/MachineList';
import MachineMap from './components/MachineMap';
Vue.use(VueRouter)

import App from './App.vue';

const routes = [
  {path: '/listMachine', component: MachineList, name: 'listMachine' },
  {path: '/mapMachine', component: MachineMap, name: 'mapMachine'},
];

const router = new VueRouter({
  routes: routes,
  mode : 'history',
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});


