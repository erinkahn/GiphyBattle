var HomeComponent = Vue.component("home", {
	data: function() {
		return {
			localUsername: null
		}
	},
	created: function() {
		this.localUsername = this.username;
	},
	template: `
		<div class="home">

			<h1><img src="dist/img/logo.png"></h1>

			<h2>How to play:</h2>

			<p>Watch the game screen to see the prompt. Choose a Giphy to match the prompt in the best way possible.</p>

			<p>Vote which Giphy is the best. The Giphy with the most votes wins!</p>

			<input v-model="localUsername" placeholder="type your name here">

			<router-link :disabled="!localUsername" to="/selectGiphy" class="nav"> Let's Battle </router-link>

		</div>
	`,
	watch: {
		localUsername: function() {
			console.log("you entered a username");

			localStorage.setItem('username', this.localUsername);

			//event send up to app - usernameChanged
			this.$emit("usernamechanged", this.localUsername);
		}
	},
	props: ['status', 'username'] //data coming down into this component
})