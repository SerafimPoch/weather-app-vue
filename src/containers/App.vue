<template>
  <div class="container">
    <search/>
    <forecast/>
  </div>
</template>

<script>

import search from './Search.vue';
import forecast from './Forecast.vue';

export default {
 components: {
   search,
   forecast
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
