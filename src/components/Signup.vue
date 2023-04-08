<template>
    <div class="signup_box">

        <h1>Signup</h1>

        <!-- <Inp_fieldds :name="name" :password="password"/> -->

        <input type="text" placeholder="username" v-model="name" />
        <input type="password" placeholder="password" v-model="password" />
        <button @click="signup">Signup</button><br><br>

        <router-link to="/login" >[ already user? Login ]</router-link>

    </div>
</template>
<script>
import axios from 'axios'
import UniqueId from 'vue-unique-id';
import Inp_fieldds from './Inp_fields.vue'
export default {
    name: "Signup",
    data() {
        return {
            name: '',
            password: ''
        }
    },
    components:{
        Inp_fieldds
    },
    methods: {

        // saving the data to json-server db via sending the data in POST request
        async signup() {

            let sendData = {
                "id": UniqueId.uid,
                "name": this.name,
                "password": this.password
            }

            let result = await axios.post("http://localhost:3000/users", sendData)

            console.log(result)


            if (result.status == 201) {
                // localStorage.setItem("user-info", JSON.stringify((result.data)))
                this.$router.push({ name: 'Login' })

            }
        }
    },
      mounted() {
        console.log("ghi");
        if(localStorage.getItem("user-info"))
        {
            this.$router.push({name:'Home'})
        }
    }
}

</script>


<style>
* {
    text-align: center;
}

input {
    display: block;
    margin: auto;
    margin-bottom: 20px;
    padding: 10px 20px;
    font-size: 15px;
    border: none;
    background: #f1f1f1;
    outline: none;
    color: black;
    border-radius: 5px;
}

h1 {
    text-align: center;
}

button {
    padding: 10px 20px;
    width: 17%;
    border: 2px solid black;
    background: skyblue;
    border-radius: 5px;
    cursor: pointer;
}
</style>