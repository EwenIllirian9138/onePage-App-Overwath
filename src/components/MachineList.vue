<template>
  <div>
    <h2>Liste des machines</h2>
    <h1>{{name}}</h1>
    <h3>Status : {{status}}</h3>
    <h5>{{toLocaleString()}}</h5>
  </div>
</template>

<script>
  import Machine from './Machine';

  export default {
    name: "machine-list",
    data () {
      return {
        name: 'Machine Hanamura',
        status: false,
        checkedAt: new Date(),
      }
    },

      components: {
        'machine' : Machine
      }
    }
</script>


<style scoped>

</style>
