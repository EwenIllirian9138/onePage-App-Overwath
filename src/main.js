import Vue from 'vue';
import VueRouter from 'vue-router';
import MachineList from './components/MachineList';
import MachineMap from './components/MachineMap';
import Machine from './components/Machine';
Vue.use(VueRouter)

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

import App from './App.vue';

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCfRvHHTCih0sJYDHy5OPX7rSP8YhD7L2U'
  }

})


const routes = [
  {path: '/listMachine', component: MachineList, name: 'listMachine', props: true},
  {path: '/mapMachine', component: MachineMap, name: 'mapMachine', props: true},
  {path: '/machine', component: Machine, name : 'machine'},
];

const router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});


