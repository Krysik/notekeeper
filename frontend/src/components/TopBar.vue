<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-2">
    <div class="container my-2">
      <router-link class="navbar-brand" to="/">NoteKeeper |</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <!-- Dont delete that ul It keeps buttons on the right side -->
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-md-0">
          <b-button class="mr-4" variant="success">
            <router-link to="/login" style="color: #fff; text-decoration: none">
              Zaloguj się
            </router-link>
          </b-button>
          <b-button class="mr-4" variant="info">
            <router-link
              to="/register"
              style="color: #fff; text-decoration: none"
            >
              Zarejestruj się
            </router-link>
          </b-button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style></style>
