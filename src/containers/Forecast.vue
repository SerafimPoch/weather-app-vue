<template>
    <div class='containerForecast'>
        <p>{{city}}</p>
        <p>{{temp}} Celcium</p>
        <p>{{descrip}}</p>
    </div>
</template>

<script>
export default {
   
 computed: {
city(){
    return this.$store.getters.city
},
temp(){
    return this.$store.getters.temp
},
descrip(){
    return this.$store.getters.descrip
}
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