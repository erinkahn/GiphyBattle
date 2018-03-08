var WinnerComponent = Vue.component("winner", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="win">

			<h1> Congrats, {{ status.submissions[0].username }} </h1> 

			<p> You are the winner!!! </p>

			<p> <img :src="status.submissions[0].giphyURL"> </p>

			<router-link to="/" class="nav"> play again </router-link>

		</div>
	`,
	props: ['status']
});