var VoteComponent = Vue.component("vote", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="vote">

			<h1>Cast Your Vote</h1>
			<p>Vote for the best giphy that matches this subject: {{ " " }} </p>

			<p> {{ }} Submissions </p>


			<router-link to="/selectGiphy" class="nav"> < Back </router-link>
			
			<router-link to="/winner" class="nav"> Vote </router-link>


		</div>
	`,
	props: []
})
