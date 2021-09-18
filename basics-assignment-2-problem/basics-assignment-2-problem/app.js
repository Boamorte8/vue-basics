const app = Vue.createApp({
	data() {
		return {
			letters: '',
			words: '',
		};
	},
	methods: {
		showAlert() {
			alert('Button pressed!');
		},
		onKeydown(event) {
			this.letters = event.target.value;
		},
		onEnter(event) {
			this.words = event.target.value;
		},
	},
});

app.mount('#assignment');