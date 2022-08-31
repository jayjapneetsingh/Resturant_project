<template>
    <div>
        <Header-View /> 
        <h1> Update Your Restaurant  </h1>
        <form>
            <input type="text" name="name" v-model="resturant.name" placeholder="Name" />
        <input type="text" name="address" v-model="resturant.address" placeholder="Email" />
        <input type="" name="contact" v-model="resturant.contact" placeholder="Numeric" />
        <button type="button" @click='UpdateResturant()'> Update  </button>
        </form>
      
    </div>
</template>
<script>
import axios from "axios";
import HeaderView from './HeaderView.vue';
export default {
    name: "UpdateResturant",
    components: {
        HeaderView,
    },
    data(){
        return{
                resturant:[],
                name:"",
                address:"",
                contact:"",

        }
    },
 
        methods:{   
            async UpdateResturant(){
            let result = await axios.put(`http://localhost:3000/restaurant/`+this.$route.params.id,{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact 
            });
            if(result.status==200){
                this.$router.push({name:'HomeView'});
            }

            }
        },
   async mounted() {
        let user = localStorage.getItem('user-info');
        
        if (!user) {
            
            this.$router.push({ name: 'SignUp' })
           
        }

        const result = await axios.get(`http://localhost:3000/restaurant/`+this.$route.params.id);
       // console.log("result", result, this.$route.params.id)
        console.log(result.data)
        this.resturant =result.data
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
