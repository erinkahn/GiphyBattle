var SelectGiphyComponent = Vue.component("selectGiphy", {
	data: function() {
		return {

		}
	},
	template: `
		<div>

			<h1> Submit a Giphy </h1>

			<p> Choose the best giphy to match this subject: </p> 
			<p> {{ " " }} </p>

			<input type="text" placeholder="search for a giphy">

			<router-link to="/" class="nav"> < Back </router-link>
			<router-link to="/vote" class="nav"> Submit Giphy </router-link>


		</div>
	`,
	props: []
})