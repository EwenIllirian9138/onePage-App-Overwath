<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxkKLbeYYp6IhrA2sRnUr6gxI0IP67M9YpvWzZI-0QEl41C7yhw">
    <div>
      <button id="listMachine" @click="onMachinesListClick">Listes des Machines</button> <button id="showMap" @click="onMapClick">Voir la carte</button>
    </div>
    <router-link :to="{name : 'listMachine'}">view machine list</router-link>
    <router-link :to="{name : 'mapMachine'}">view map</router-link>
    <!--<router-link :to="{name : 'machine'}">machine</router-link>-->
    <router-view> </router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome on overwatch coffe machine',

    }
  },
  methods: {
    onMachinesListClick: function (event) {
      window.alert('list des machines')
    },
    onMapClick: function (event){
     window.alert('voir la map')
    }
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

button {
  background-color: aqua;
  border: 2px solid black;
  font-weight: normal;
}
</style>
