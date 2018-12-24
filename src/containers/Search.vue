<template>
<div class='containerSearch'>
  <div>
    <input class='search' type='text' v-model='city'/>
    <button @click='submit'>Submit</button>
    </div>
  </div>
</template>;

<script>
  export default {
    data(){
      return {
        city: ''
        }
    },
    methods: {
      submit(){
        this.$store.dispatch('getDataByCity',this.city)
      }
    }
  }
  </script>

<style>
.containerSearch {
  width: 20%;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
}

.search {
  width: 65%;
  height: 15px;

}
</style>


