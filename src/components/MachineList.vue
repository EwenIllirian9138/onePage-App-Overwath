<template>
  <div>
    <h2>Liste des machines</h2>
      <machine  v-for="probOwMachine in probOwMachines" v-bind:key="probOwMachine.id" v-bind:probMachine="probOwMachine" v-bind:AttrOwMachine="probMachine" v-if="!hideOffOwMachines || probOwMachine.status"></machine>
  </div>
</template>

<script>
import Machine from './Machine';

export default {
  name: "machine-list",
  props: ["probOwMachines"],
  data () {
    return {
    }
  },
  components: {
   'machine' : Machine
  }
}
</script>


<style scoped>


</style>
