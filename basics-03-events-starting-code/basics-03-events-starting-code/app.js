const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove() {
      this.counter--;
    },
    hover() {
      console.log('hover');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted!');
    },
  },
});

app.mount('#events');
