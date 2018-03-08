<template>
  <div classe="listMachine">
    <h2>Liste des machines</h2>
      <machine  v-for="owMachine in owMachines" v-bind:key="owMachine.id" v-bind:probMachine="owMachine"></machine>
  </div>
</template>

<script>
  import Machine from './Machine';

  export default {
    name: "machine-list",
    data () {
      return {

        owMachines: [{

          id: 1,
          name: 'Machine Hanamura',
          status: false,
          checkedAt: new Date(),
        }, {
          id: 2,
          name: 'Machine Anubis',
          status: false,
          checkedAt: new Date(),
        }, {
          id: 3,
          name: 'Machine Horizon',
          status: false,
          checkedAt: new Date(),
        }, {
          id: 4,
          name: 'Machine Volskya',
          status: false,
          checkedAt: new Date(),
        }],
      }
    },

      components: {
        'machine' : Machine
      }
    }
</script>


<style scoped>


</style>
