<template>
  <div>
    <h1>{{name}}</h1>
    <h3>Status : {{status}}</h3>
    <h5>{{toLocaleString()}}</h5>
  </div>
</template>

<script>
    export default {
        name: "machine",
      data () {
        return{
          name : 'What esle',
          status: false,
          checkAt: new Date(),
          }
      }
    }
</script>

<style scoped>

</style>
