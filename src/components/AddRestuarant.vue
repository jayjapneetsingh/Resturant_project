<template>
    <div>
        <Header-View /> 

        <h1> Add  Your Restaurant  </h1>
        <form>
            <input type="text" name="name" v-model="resturant.name" placeholder="Name" />
        <input type="text" name="address" v-model="resturant.address" placeholder="Email" />
        <input type="" name="contact" v-model="resturant.contact" placeholder="Numeric" />
        <button type="button" @click='addresturant()'> Sign Up </button>
        </form>
      
    </div>
</template>
<script>
import HeaderView from './HeaderView.vue';
import axios from "axios";
export default {
    name: "AddResturant",


    
   
    components: {
        HeaderView,
    },
 
        data(){
            return{
            resturant:{
                name:"",
                address:"",
                contact:""
            }
            }
        },
        methods:{
           async addresturant(){
            let result = await axios.post(`http://localhost:3000/restaurant`,{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact 
            }
            )
            console.log("your result", result)

                console.log(this.resturant)
                console.log(result)
                if (result.status ==201){
                    this.$router.push({ name: 'HomeView' })                }
            }
            
        },
    mounted() {
        let user = localStorage.getItem('user-info');
        
        if (!user) {
            this.$router.push({ name: 'SignUp' })

        }
    },
   
}
</script>
<style scoped>


form input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid skyblue;
}

form button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>
