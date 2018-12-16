<template>
  <div class="container">
  <p>{{this.$store.state.data[0].city.name}}</p>
  <p>{{this.$store.state.data[0].city.population}}</p>
  <search/>
  </div>
</template>

<script>

import search from './Search.vue';

export default {
 components: {
   search
 },
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
