<template>
    <div class="register">
        <img src="../assets/logo1.png" />

        <h1> Sign UP </h1>
        <input type="text" name="name" v-model="name" placeholder="Name" />
        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <button @click='signup()'> Sign Up </button>
        <router-link to="/login">Login</router-link>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async signup() {
             console.log("signup", this.name, this.email, this.password);
            let result =  await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password

            });
            console.log(result)
            if (result.status == 201) {
                alert("Data Done suceesfull")
                 console.log(this.email, this.password)
            }
            localStorage.setItem("user-info", JSON.stringify(result))
           this.$router.push({ name: 'HomeView' })
           

}
    },
     mounted() {
                let user = localStorage.getItem('user-info');
                if (user) {
                    this.$router.push({ name: 'HomeView' })

                }
            }
}


</script>

<style scoped>
img {
    width: 300px;
}

.register input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>