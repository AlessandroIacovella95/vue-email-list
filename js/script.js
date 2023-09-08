const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      numberEmails: 10,
    };
  },

  methods: {
    generateEmail() {
      for (let i = 0; i < this.numberEmails; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const randomEmail = response.data.response;
            this.emails.push(randomEmail);
          });
      }
    },
  },

  mounted() {
    this.generateEmail();
  },
}).mount("#app");
