<template>
  <div>
  <p>{{this.$store.state.data[0].city.name}}</p>

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

 computed: {
   ...mapGetters(['testData'])
 }

  
}
</script>

<style>


</style>
