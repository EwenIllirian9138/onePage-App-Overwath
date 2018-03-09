<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxkKLbeYYp6IhrA2sRnUr6gxI0IP67M9YpvWzZI-0QEl41C7yhw">
    <div>
      <router-link class="link btn btn-info" :to="{name : 'listMachine'}">view machine list</router-link>
      <router-link class="link btn btn-info" :to="{name : 'mapMachine'}">view map</router-link>
      <!--<button type="button" class="btn btn-info" id="listMachine" @click="onMachinesListClick">list machine</button>-->
      <!--<button id="showMap" class="btn btn-info" @click="onMapClick">show map</button>-->
    </div>
    <!--<router-link :to="{name : 'listMachine'}">view machine list</router-link>-->
    <!--<router-link :to="{name : 'mapMachine'}">view map</router-link>-->
    <!--<router-link :to="{name : 'machine'}">machine</router-link>-->
    <router-view :prob-ow-machines="owMachines" :prob-machine-map="owMachines"><li v-for="axiosMachines of axiosMachine"><p>{{axiosMachine.name}}</p></li></router-view>
  </div>
</template>

<script>
import MachineList from './components/MachineList';
import MachineMap from './components/MachineMap';
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome on overwatch repair machine',
      axiosMachines: [],
      owMachines: [{
        id: 1,
        name: 'Machine Hanamura',
        status: false,
        checkedAt: new Date(),
        position: {lat: 10.0, lng: 10.0}
      }, {
        id: 2,
        name: 'Machine Anubis',
        status: false,
        checkedAt: new Date(),
        position: {lat: 9.0, lng: 10.9}

      }, {
        id: 3,
        name: 'Machine Horizon',
        status: false,
        checkedAt: new Date(),
        position: {lat: 11.0, lng: 9.0}

      }, {
        id: 4,
        name: 'Machine Volskya',
        status: false,
        checkedAt: new Date(),
        position: {lat: 11.0, lng: 11.0}

      }],
    }
  },

  async getMachine () {
    try{
      const response = await axios.get('https://machine-api-campus.herokuapp.com/api/machines');
      console.log(response);
      response.push(axiosMachines);
    } catch (error) {
      console.error(error);
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
    'machineList' : MachineList,
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
  padding-top: 5px;
  margin: 10px;
}
  button{
    width: 20%;
    padding-top: 5px;
    margin: 10px;
  }
</style>
