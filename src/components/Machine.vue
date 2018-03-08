<template>
  <div>
    <ul class="{green : machine.status, red : !machine.status}">
      <li><h2>{{probMachine.name}}</h2></li>
      <li><h3>{{statusMachine}}</h3></li>
      <li><h4>{{afficheDate}}</h4></li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "machine",
      props: ["probMachine"],

      data () {
        return{
          }
      },

    computed : {

      statusMachine()
      {
        if (this.probMachine.status === true) {

          return "ok 🤩";

        } else if (this.probMachine.status === false) {

          return "KO 🙁";
        }
      },

      afficheDate()
      {
        return this.probMachine.checkedAt.toLocaleString();
      }
    }
    }
</script>

<style scoped>

.green{
    color: green;
  border: 5px solid green ;
  }
.red{
  color:red;
  border: 5px solid red ;
}


</style>
