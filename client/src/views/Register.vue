<template>
  <section>
    <h1>Register</h1>
    <hr />
    <div class="register_blog">
      <input
        type="text"
        name="email"
        id=""
        placeholder="email"
        v-model="email"
      />
      <br />
      <input
        type="password"
        name="password"
        id=""
        placeholder="password"
        v-model="password"
      />
      <br />
      <button @click="register">Register</button>
    </div>
  </section>
</template>

<script>
import AuthenticatinService from "@/servers/AuthenticatinService.js";
export default {
  data() {
    return {
      property: "value",
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      const response = await AuthenticatinService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
      //   console.log("Register button click", this.email, this.password);
    },
  },
  //   watch: {
  //     email(value) {
  //       console.log("Changen email", value);
  //     },
  //   },
  //   mounted() {
  //     setTimeout(() => {
  //       this.email = "hello email";
  //     }, 2000);
  //   },
};
</script>

<style>
</style>