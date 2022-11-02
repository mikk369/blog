<template>
  <div class="main">
    <form class="sign-up-form">
      <h1>Sign Up</h1>
      <div class="email">
        <input type="text" placeholder="Email" v-model="email" />
      </div>

      <div class="pw1">
        <input type="password" placeholder="Password" v-model="password" />
      </div>

      <div class="pw2">
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="passwordConfirm"
        />
      </div>

      <button v-on:click.prevent="submitSignUp">submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    async submitSignUp() {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          {
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm
          }
        );
        console.log(response);
      } catch (err) {
        return alert(err.response.data.message);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
