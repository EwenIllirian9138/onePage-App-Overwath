<template>
  <div>
    <ul>
      <li><h2>{{name}}</h2></li>
      <li><h3>{{status}}</h3></li>
      <li><h4>{{checkedAt}}</h4></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "machine",
      props: ['name', 'status', 'checkedAt'],

      data () {
        return{
          }
      }
    }
</script>

<style scoped>

</style>
