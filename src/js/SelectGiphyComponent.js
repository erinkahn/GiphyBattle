//API Key : bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5
// const GIPHY_API_BASE = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5"; 


var SelectGiphyComponent = Vue.component("select-giphy", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="submitGiphy">

			<h1> Submit a Giphy </h1>

			<p> Choose the best giphy to match this subject: </p> 
			<p v-if="status" class="prompt"> "{{ status.question }}" </p>

			<input type="text" placeholder="search for a giphy">

			<div class="back-and-submit">
				<router-link to="/" class="nav"> < </router-link>
				<router-link to="/vote" class="nav"> Submit Giphy </router-link>
			</div>


		</div>
	`,
	props: ['status']
})