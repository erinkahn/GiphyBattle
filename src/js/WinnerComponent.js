var WinnerComponent = Vue.component("winner", {
	data: function() {
		return {

		}
	},
	template: `
		<div>

			<h1> Congrats, {{ winner }} </h1> 

			<p> You are the winner!!! </p>

			<p> {{ " " }} </p>

			<router-link to="/" class="nav"> play again </router-link>

		
		</div>
	`,
	props: []
})