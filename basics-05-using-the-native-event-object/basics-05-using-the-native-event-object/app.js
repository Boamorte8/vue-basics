const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: '',
    };
  },
  watch: {
    name(value, old) {
      console.log(value, old);
      if (value === '') {
        return '';
      }
      this.fullname = value + ' Salazar';
    },
    lastName(value, old) {
      console.log(value, old);
      if (value === '') {
        return '';
      }
      this.fullname = this.name + ' ' + value;
    },
  },
  computed: {
    /*fullname() {
      console.log('Running again... fullname');
      if (this.name === '') {
        return '';
      }
      return this.name + ' Salazar';
    },*/
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
/*
      this.name = event.target.value + ' ' + lastName;
*/
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
