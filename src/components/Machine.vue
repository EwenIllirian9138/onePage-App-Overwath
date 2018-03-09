<template>
  <div class="container">
    <ul >
      <li><h2>{{probMachine.name}}</h2></li>
      <li><h3 v-bind:class="probMachine.status ? 'green' : 'red'">{{statusMachine}}</h3></li>
      <li><h4>{{afficheDate}}</h4></li>
      <machineStatus v-bind:AttrOwMachine="probMachine"  ></machineStatus>
    </ul>
  </div>
</template>

<script>
  import MachineStatus from './MachineStatus'
    export default {
      name: "machine",
      hideOffOwMachines: false,
      props: ["probMachine", "probCoucou"],

      data () {
        return{
          }
      },

    computed : {

      statusMachine()
      {
        if (this.probMachine.status === true) {

          return "Run 🤩";

        } else if (this.probMachine.status === false) {

          return "Off 🙁";
        }
      },

      afficheDate()
      {
        return this.probMachine.checkedAt.toLocaleString();
      },
    },
    components  :{
        'machineStatus' : MachineStatus,
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
    flex-grow: 2;
    display: flex;
  }
  li{
    flex-grow: 1;
    justify-content: center;
  }

  .container{
    display: flex;
  }


</style>
