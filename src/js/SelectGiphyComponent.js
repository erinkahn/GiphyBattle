var SelectGiphyComponent = Vue.component("selectGiphy", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="submitGiphy">

			<h1> Submit a Giphy </h1>

			<p> Choose the best giphy to match this subject: </p> 
			<p> {{ "subject" }} </p>

			<input type="text" placeholder="search for a giphy">

			<div class="back-and-submit">
				<router-link to="/" class="nav"> < </router-link>
				<router-link to="/vote" class="nav"> Submit Giphy </router-link>
			</div>


		</div>
	`,
	props: []
})