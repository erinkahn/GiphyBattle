"use strict";

var WinnerComponent = Vue.component("winner", {
	data: function data() {
		return {};
	},
	template: "\n\t\t<div class=\"win\">\n\n\t\t\t<div v-if=\"status && status.submissions && status.submissions.length\">\n\n\t\t\t\t<h1> Congrats, {{ status.submissions[0].username }} !!! </h1> \n\n\t\t\t\t<p> You are the winner!!! </p>\n\n\t\t\t\t<p> <img :src=\"status.submissions[0].giphyURL\"> </p>\n\n\t\t\t\t<router-link to=\"/\" class=\"nav\"> play again </router-link>\n\t\t\t</div>\n\t\t</div>\n\t",
	watch: {
		status: function status() {
			console.log("status changed");
			if (this.status.phase != 'post-game') {
				this.$router.push('/selectGiphy');
			}
		}
	},
	props: ['status']
});
//# sourceMappingURL=WinnerComponent.js.map
