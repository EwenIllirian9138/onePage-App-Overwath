<template>
  <li :class="{ active: AttrOwMachine.status }"><toggle-button :value="AttrOwMachine.status" @change="AttrOwMachine.status = !AttrOwMachine.status"/></li>
</template>

<script>
    export default {
        name: "machineStatus",
      props: ['AttrOwMachine']
    }
</script>

<style scoped>

</style>
