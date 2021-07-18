<template>
  <div id="login">
    <TopBar />
    <div
      class="
        container
        d-flex
        flex-column
        justify-content-center
        align-items-center
        wrapper
        text-center
      "
    >
      <h4 class="mb-2">Zaloguj się do swojego konta</h4>
      <b-form @submit.prevent="handleSubmit" id="login-form">
        <b-form-group id="email-group" label-for="email" class="my-4">
          <b-form-input
            id="email"
            type="email"
            class="py-3 px-2 text-center"
            placeholder="Email"
            v-model="form.email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="password-group" label-for="password" class="my-4">
          <b-form-input
            id="password"
            type="password"
            class="py-3 px-2 text-center"
            placeholder="Hasło"
            v-model="form.password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Zaloguj się</b-button>
        <p class="mt-4">
          <router-link to="#">Nie pamiętam hasła</router-link>
        </p>
        <p>
          Nie posiadasz jeszcze konta?
          <router-link to="/register">zarejestruj się</router-link>
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
export default {
  name: "Login",
  components: {
    TopBar,
  },
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    handleSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  background-color: #f5f5f5;
  height: 100vh;
  .wrapper {
    height: 80vh;
    form {
      width: 100%;
      max-width: 330px;
    }
  }
}
</style>
