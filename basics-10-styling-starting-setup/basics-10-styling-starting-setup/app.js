const app = Vue.createApp({
	data() {
		return {
			boxesSelected: {
				A: false,
				B: false,
				C: false,
			},
		}
	},
	computed: {
		boxAClasses() {
			return { active: this.boxesSelected.A };
		},
		boxBClasses() {
			return { active: this.boxesSelected.B };
		},
		boxCClasses() {
			return { active: this.boxesSelected.C };
		},
	},
	methods: {
		selectBox(box) {
			this.boxesSelected[box] = !this.boxesSelected[box];
		}
	},
});

app.mount('#styling')