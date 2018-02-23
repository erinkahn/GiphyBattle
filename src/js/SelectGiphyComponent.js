//API Key : bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5
// const GIPHY_API_BASE = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5"; 



var SelectGiphyComponent = Vue.component("select-giphy", {
	data: function() {
		return {
			searchTerm: null,
			giphys: []
		}
	},
	template: `
		<div class="submitGiphy">

			<h1> Submit a Giphy </h1>

			<p> Choose the best giphy to match this subject: </p> 
			
			<p v-if="status" class="prompt"> "{{ status.question }}" </p>

			<input v-model="searchTerm" type="text" placeholder="search for a giphy">

			<ul class="giphys">
				<li v-for="giphy in giphys">
					{{ giphy }}
				</li>
			</ul>

			<div class="back-and-submit">
				<router-link to="/" class="nav"> < </router-link>

				<router-link :disabled="!searchTerm" to="/vote" class="nav"> Submit Giphy </router-link>
			</div>


		</div>
	`,
	watch: {
		searchTerm: function() {
			console.log("you entered a search term");

			//`axios`, `get` gifs from giphy, and `then` 
			//when they come back, put the `response` data 
			//in my variable called `this.giphys`
			axios
				.get("http://api.giphy.com/v1/gifs/search?q=" + this.searchTerm + "&limit=10&offset=0&rating=G&lang=en" + "&api_key=bhh0KO5k7BBVEyB1kfKqEHsZNozI68e5")
				.then((response) => {
					console.log('you got gifs and here they are: ', response.data.data);
					this.giphys = response.data.data;
				}) 

		}
	},
	props: ['status'] //data coming down into this component
})