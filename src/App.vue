<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxkKLbeYYp6IhrA2sRnUr6gxI0IP67M9YpvWzZI-0QEl41C7yhw">
    <div>
      <button type="button" class="btn btn-info" id="listMachine" @click="onMachinesListClick"><router-link class="link" :to="{name : 'listMachine',params: { probOwMachines: owMachines  }}">view machine list</router-link></button>
      <button id="showMap" class="btn btn-info" @click="onMapClick"><router-link class="link" :to="{name : 'mapMachine', params : {probMachineMap: owMachines}}">view map</router-link></button>
    </div>
    <!--<router-link :to="{name : 'listMachine'}">view machine list</router-link>-->
    <!--<router-link :to="{name : 'mapMachine'}">view map</router-link>-->
    <!--<router-link :to="{name : 'machine'}">machine</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Machinelist from './components/MachineList';
import MachineMap from './components/MachineMap';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome on overwatch repair machine',
      owMachines: [{
        id: 1,
        name: 'Machine Hanamura',
        status: false,
        checkedAt: new Date(),
        markers: [{lat:10.0, lng: 10.0}]
      }, {
        id: 2,
        name: 'Machine Anubis',
        status: false,
        checkedAt: new Date(),
        markers: [{lat:9, lng: 9}]
      }, {
        id: 3,
        name: 'Machine Horizon',
        status: false,
        checkedAt: new Date(),
        markers: [{lat:9.5, lng: 9.5}]
      }, {
        id: 4,
        name: 'Machine Volskya',
        status: false,
        checkedAt: new Date(),
        makers: [{lat:9.8, lng: 9.8}]
      }],
    }
  },
  methods: {
    onMachinesListClick: function (event) {
      window.alert('list des machines')
    },
    onMapClick: function (event){
     window.alert('voir la map')
    }
  },
  components: {
    'machineList' : Machinelist,
    'machineMap' : MachineMap,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.link{
  color: black;
}
  button{
    width: 20%;
    padding-top: 5px;
    margin: 10px;
  }
</style>
