<template>
	<div class="nav">
		<nav class="navbar">
			<p ><router-link to="/" class="nav_link"> Home </router-link></p>
			<p v-if='s_l_show'>
				<router-link to="/signup" class="nav_link">Signup</router-link>
			</p >
			<p v-if='s_l_show'><router-link to="/login" class="nav_link">Login</router-link></p>
			<p @click='logout' class="nav_link">Logout</p>

			
		</nav>
	</div>
</template>

<script>
export default {
	name: "Name",
	data(){
		return{
			s_l_show:true	
		}
	},
	methods:{
		logout(){
			localStorage.clear()
			this.$router.push({name:'Login'})
		},
		mounted(){
			console.log('lebu levu')
			if(localStorage.getItem('user-info')){
				this.s_l_show=false;
			}
		}
	}
};
</script>

<style type="text/css">
.nav {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.navbar {
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: flex-end;
	background: #eee;
	width: 100%;
	border-radius: 10px;
}
.nav_link {
	margin-left: 40px;
	color: black;
	text-decoration-color: none;
	text-decoration: none;
	font-size: 25px;
	cursor: pointer;
	/*		font-family: Arial;*/
}
</style>
