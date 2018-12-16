<template>
  <div class="container">
  <p>{{this.$store.state.data[0].city.name}}</p>
  <p>{{this.$store.state.data[0].city.population}}</p>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import {weatherApi} from '../../api/'

export default {
  name: 'App',

 created(){
    this.$store.dispatch('getDataByCity')
 
 },  
}
</script>

<style scoped>

.container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
</style>
