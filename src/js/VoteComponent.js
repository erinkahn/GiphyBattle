var VoteComponent = Vue.component("vote", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="vote">

			<h1>Cast Your Vote</h1>
			<p>Vote for the best giphy that matches this subject: </p>
			<p> {{ status.question }} </p>

			<p> {{ status.submissions.length }} Submissions </p>

			<ul class="votes">
				<li v-for="submission in status.submissions">
					<img :src="submission.giphyURL">
					{{submission.username}} {{submission.upvotes.length}} votes
				</li>
			</ul>

			<div class="back-and-submit">
				<router-link to="/selectGiphy" class="nav"> < </router-link>
				<router-link to="/winner" class="nav"> Vote </router-link>
			</div>

		</div>
	`,
	props: ['status']
})


