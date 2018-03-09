<template>
  <div>
    <h2>Carte des machines</h2>
    <gmap-map
      :center="{lat:10, lng:10}"
      :zoom="7"
      style="width: 100%; height: 800px">
      <gmap-marker v-for="probOwMachine in probMachineMap" v-bind:key="probOwMachine.id" :position="probOwMachine.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "machine-map",
  props: ["probMachineMap"],
  data() {
    return {
      center: {lat: 10.0, lng: 10.0},
    }
  },

}

</script>

<style scoped>

</style>
