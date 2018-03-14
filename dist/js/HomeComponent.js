"use strict";

var HomeComponent = Vue.component("home", {
	data: function data() {
		return {
			localUsername: null
		};
	},
	created: function created() {
		this.localUsername = this.username;
	},
	template: "\n\t\t<div class=\"home\">\n\n\t\t\t<h1><img src=\"dist/img/logo.png\"></h1>\n\n\t\t\t<h2>How to play:</h2>\n\n\t\t\t<p>Watch the game screen to see the prompt. Choose a Giphy to match the prompt in the best way possible.</p>\n\n\t\t\t<p>Vote which Giphy is the best. The Giphy with the most votes wins!</p>\n\n\t\t\t<input v-model=\"localUsername\" placeholder=\"type your name here\">\n\n\t\t\t<router-link :disabled=\"!localUsername\" to=\"/selectGiphy\" class=\"nav\"> Let's Battle </router-link>\n\n\t\t</div>\n\t",
	watch: {
		localUsername: function localUsername() {
			console.log("you entered a username");

			localStorage.setItem('username', this.localUsername);

			//event send up to app - usernameChanged
			this.$emit("usernamechanged", this.localUsername);
		}
	},
	props: ['status', 'username'] //data coming down into this component
});
//# sourceMappingURL=HomeComponent.js.map
