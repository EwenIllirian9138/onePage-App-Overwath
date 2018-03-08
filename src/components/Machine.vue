<template>
  <div>
    <ul >
      <li><h2>{{probMachine.name}}</h2></li>
      <li><h3 v-bind:class="probMachine.status ? 'green' : 'red'">{{statusMachine}}</h3></li>
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

          return "OK 🤩";

        } else if (this.probMachine.status === false) {

          return "KO 🙁";
        }
      },

      afficheDate()
      {
        return this.probMachine.checkedAt.toLocaleString();
      },
    }
    }
</script>

<style scoped>

.green{
    color: green;
  }
.red{
  color:red;
}
  ul{
    border: 5px solid black;
  }


</style>
