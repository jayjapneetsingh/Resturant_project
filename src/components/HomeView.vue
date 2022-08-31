<template>
    <div>
        <Header-View />
        <h1>Welcome to the Jappii restaturant </h1>
        <h1>Resturant List </h1>
    <table border="1">
         <table style="border:1px solid black; ">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Actions</th>

            </tr>
            
            <tr v-for="item in resturant" :key="item.id">
                <td>{{item.id}}</td>  
                <td>{{item.name}}</td> 
                <td>{{item.contact}}</td> 
                <td>{{item.address}}</td>
                <td><router-link :to=" '/update/'+item.id">Update</router-link></td>
                        </tr>
          </table>
    </table>
    </div>
</template>
<script>
import HeaderView from './HeaderView.vue';
import axios from "axios";
export default {
    name: "HomeView",
    data() {
        return {
            name: '',
            resturant: []
        }
    },
    components: {
        HeaderView,
    },


    async mounted() {
        let user = localStorage.getItem('user-info');
       // this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'SignUp' })

        }
        let result = await axios.get(`http://localhost:3000/restaurant` )
        console.log(result.data) 
        this.resturant =result.data



    },

}
</script>
<style scoped>
td{
    width:160px;
    height:40px;
}
        
</style>
