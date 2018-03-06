import Vue from 'vue'
import App from './App.vue'
import  MachineList from './MachineList.vue';
Vue.component('machinelist', MachineList )
import  MachineMap from './MachineMap.vue';
Vue.component('mapmachine', MachineMap )

new Vue({
  el: '#app',
  render: h => h(App),
})

