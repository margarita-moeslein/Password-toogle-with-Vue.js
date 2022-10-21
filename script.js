Vue.createApp({
  data() {
    return {
      type: "password",
      buttonText: "Show Password",
    };
  },
  methods: {
    togglePassword() {
      if (this.type === "password") {
        this.type = "text";
        this.buttonText = "Hide Password";
      } else {
        this.type = "password";
        this.buttonText = "Show Password";
      }
    },
  },
}).mount("#app");
