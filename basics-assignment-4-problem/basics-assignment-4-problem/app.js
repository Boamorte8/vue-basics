const app = Vue.createApp({
	data() {
		return {
			newClass: '',
			hiddenParagraph: false,
			backColor: '',
		}
	},
	computed: {
		visibilityClass() {
			return this.hiddenParagraph ? 'hidden' : 'visible';
		}
	},
	methods: {
		toggleParagraph() {
			this.hiddenParagraph = !this.hiddenParagraph;
		}
	},
});

app.mount('#assignment');
