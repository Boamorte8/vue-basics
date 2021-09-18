const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			timer: null,
		}
	},
	watch: {
		counter(value, old) {
			const that = this;
			if (old > 0 && !that.timer) {
				this.timer = setTimeout(() => {
					that.counter = 0;
				}, 5000);
			} else if (value === 0) {
				clearTimeout(that.timer);
				that.timer = null;
			}
		}
	},
	computed: {
		progress() {
			if (this.counter === 0) {
				return '';
			} else if (this.counter < 37) {
				return 'Not there yet';
			} else if (this.counter === 37) {
				return 'Well done!';
			} else {
				return 'Too much!'
			}
		}
	},
	methods: {
		add(value) {
			this.counter += value;
		}
	},
});

app.mount('#assignment');