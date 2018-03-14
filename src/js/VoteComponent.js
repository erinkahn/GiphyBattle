var VoteComponent = Vue.component("vote", {
	data: function() {
		return {

		}
	},
	template: `
		<div class="vote">

			<h1>Cast Your Vote</h1>
			<p>Click to vote for the best giphy that matches this subject: </p>
			<p>You have {{ Math.round(status.timeLeftInPhase / 1000) }} seconds left to vote.</p>
			<p> {{ status.question }} </p>

			<p> {{ status.submissions.length }} Submissions </p>

			<ul class="votes">
				<li v-for="(submission, index) in status.submissions">
					<img @click="userVoted(index)" :src="submission.giphyURL">
					{{submission.username}} {{submission.upvotes.length}} votes
				</li>
			</ul>

			<div class="back-and-submit">
				<router-link to="/selectGiphy" class="nav"> < </router-link>
			</div>

		</div>
	`,
	methods: {
		userVoted: function(index) {
			console.log('user voted', index);
			// do ajax req for POST /upvote/0
			// url + index
			// send in username
			axios
				.post('http://circuslabs.net:6432/upvote/' + index, {
					username: this.username
				})
				.then((response) => {
					console.log('hi server, upvote this');
				})
				.catch(function (error) {
					console.log('you got an error');
				});
			
		}

	},
	props: ['status']
});








