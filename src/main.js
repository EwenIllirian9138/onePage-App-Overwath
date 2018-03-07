import Vue from 'vue';
import VueRouter from 'vue-router';
import MachineList from './components/MachineList';
import MachineMap from './components/MachineMap';
import Machine from './components/Machine';
Vue.use(VueRouter)

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

import App from './App.vue';


const routes = [
  {path: '/listMachine', component: MachineList, name: 'listMachine', props: true },
  {path: '/mapMachine', component: MachineMap, name: 'mapMachine'},
  {path: '/machine', component: Machine, name : 'machine'},
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


