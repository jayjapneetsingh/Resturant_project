<template>
    <div class="nav">

        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <a v-on:click="logout()" href="">Logout</a>


    </div>
</template>

<script>
export default {
    name: "HeaderView",
    methods:{
        logout(){

            localStorage.clear();
            this.$router.push({name:'HomeView'})
        }
    }

}

</script>

<style scoped>
.nav{
    background-color:aqua;
    overflow: hidden;
}

a {
    float: left;
    padding: 10px 56px;
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: x-large;
    margin-left: -41px;
}


.nav a:hover{
    background-color: white ;
}
</style>
