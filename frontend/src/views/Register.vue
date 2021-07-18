<template>
  <div id="register">
    <TopBar />
    <div class="container">
      <b-alert v-model="showAlert" :variant="alertVariant">{{
        errorMsg
      }}</b-alert>
      <b-form @submit.prevent="handleSubmit" id="register-form" class="pt-3">
        <b-form-group
          class="my-4"
          id="username-group"
          label-for="username"
          description="Minimum 4 znaki"
        >
          <b-form-input
            id="username"
            placeholder="Nazwa użytkownika"
            v-model="form.username"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="my-4" id="email-group" label-for="email">
          <b-form-input
            id="email"
            type="email"
            placeholder="Email"
            v-model="form.email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="my-4"
          id="password-group"
          label-for="password"
          description="Minimum 8 znaków"
        >
          <b-form-input
            id="password"
            placeholder="Hasło"
            v-model="form.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="my-4"
          id="confirm-password-group"
          label-for="confirm-password"
          description="Wprowadź hasło ponownie"
        >
          <b-form-input
            id="confirm-password"
            placeholder="Powtórz hasło"
            v-model="confirmPassword"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button class="mt-2" type="submit" variant="success">
          Zarejestruj się
        </b-button>
        <p class="mt-4">
          Posiadasz już konto ?
          <router-link to="/login">zaloguj się</router-link>
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
// import axios from '@/utils/axios';
import axios from 'axios';

export default {
  name: "Register",
  components: {
    TopBar,
  },
  data: () => ({
    form: {
      username: "",
      email: "",
      password: "",
    },
    confirmPassword: "",
    errorMsg: "",
    showAlert: false,
    alertVariant: "success",
  }),
  watch: {
    showAlert(value) {
      if (value) {
        setTimeout(() => {
          this.showAlert = false;
        }, 2200);
      }
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.isFormValid()) {
        console.log('not valid');
        return;
      }
      try {
        const response = await axios.post('/api/users', this.form)
        console.log('response', response);
      } catch (error) {
        console.log(error);

      }
    },

    isFormValid() {
      if (this.form.password !== this.confirmPassword) {
        this.errorMsg = "Hasła nie są takie same";
        this.showAlert = true;
        this.alertVariant = "danger";
        return false;
      }
      if (this.form.password.length < 8) {
        this.errorMsg = "Hasło jest za krótkie";
        this.showAlert = true;
        this.alertVariant = "danger";
        return false;
      }
      if (this.form.username < 4) {
        this.errorMsg = "Nazwa użytkownika jest za krótka";
        this.showAlert = true;
        this.alertVariant = "danger";
        return false;
      }
      return true;
    },
  },
};
</script>

<style></style>
