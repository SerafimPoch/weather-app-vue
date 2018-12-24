<template>
    <div class='containerForecast'>
        <p>{{city}}</p>
        <!-- <p>{{temp}} Celcium</p> -->
    </div>
</template>

<script>
export default {
   
 computed: {
city(){
    return this.$store.getters.city
},
// temp(){
//     return Math.round(this.$store.getters.tempCelc -273.15)
// }
    }
    }
   
</script>

<style>
    .containerForecast {
        width: 20%;
        display: flex;
        margin-top: 30px;
        align-items: center;
        flex-flow: column wrap;
        justify-content: center;
        border: 1px solid black;

    }
</style>