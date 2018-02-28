"use strict";

var HomeComponent = Vue.component("home", {
	data: function data() {
		return {
			username: null
		};
	},
	template: "\n\t\t<div class=\"home\">\n\n\t\t\t<h1><img src=\"dist/img/logo.png\"></h1>\n\n\t\t\t<h2>How to play:</h2>\n\n\t\t\t<p>Watch the game screen to see the prompt. Choose a Giphy to match the prompt in the best way possible.</p>\n\n\t\t\t<p>Vote which Giphy is the best. The Giphy with the most votes wins!</p>\n\n\t\t\t<input v-model=\"username\" placeholder=\"type your name here\">\n\n\t\t\t<router-link :disabled=\"!username\" to=\"/selectGiphy\" class=\"nav\"> Let's Battle </router-link>\n\n\t\t</div>\n\t",
	watch: {
		username: function username() {
			console.log("you entered a username");

			//event send up to app - usernameChanged
			this.$emit("usernamechanged", this.username);
		}
	},
	props: ['status'] //data coming down into this component
});
//# sourceMappingURL=HomeComponent.js.map
