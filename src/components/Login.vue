<template>
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder="username" v-model="name" />
        <input type="password" placeholder="password" v-model="password" />
        <button @click="login">login</button> <br /><br />
        <router-link to="/signup">[ New user? Signup ]</router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            name: "",
            password: "",
        };
    },
    methods: {
        async login() {
            let url = `http://localhost:3000/users?name=${this.name}&password=${this.password}`;

            let req = await axios(url);
            // console.log(req.data.length)

            if (req.status == 200 && req.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(req.data));
                this.$router.push({ name: "Home" });
            } else {
                alert("wrong credentials bro !");
            }
        },
    },
    mounted() {
        console.log("ghi");
        console.log(this.$lebu);
        if (localStorage.getItem("user-info")) {
            this.$router.push({ name: "Home" });
        }
    },
};
</script>
