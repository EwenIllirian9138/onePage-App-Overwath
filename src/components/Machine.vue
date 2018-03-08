<template>
  <div class="container">
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

          return "Run 🤩";

        } else if (this.probMachine.status === false) {

          return "Off 🙁";
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
