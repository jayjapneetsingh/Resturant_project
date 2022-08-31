<template>
    <div class="login-register">
        <img src="../assets/logo1.png" />

        <h1>Login</h1>
        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input type="text" name="password" v-model="password" placeholder="Password" />
        <button @click='login()'>Login </button><br>
        <router-link to ="/signup">SignUp</router-link>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
    name: "LoginView",
    data(){
        return{
            email:'',
            password: '',
      
    };
    },
    methods:{
         async login(){
            alert("ji")
            console.log(this.email, this.password);
              let result =   await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
             console.log(result);
             
            
         if (result.status == 200) {
         alert("Data Done suceesfull")
                 console.log(this.email, this.password)
            
           localStorage.setItem("user-info", JSON.stringify(result))
           this.$router.push({ name: 'HomeView' })
            }

        }
    }
    
}
</script>
<style scoped>
.login-register input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid skyblue;
}

.login-register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
img{
    width: 300px;
}
</style>