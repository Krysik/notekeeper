<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-2">
    <div class="container my-2">
      <a class="navbar-brand" href="{% url 'index' %}">NoteKeeper |</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <!-- Dont delete that ul It keeps buttons on the right side -->
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-md-0">
          <b-button class="mr-4" variant="success">
            <router-link to="/login" style="color: #fff">
              Zaloguj się
            </router-link>
          </b-button>
          <b-button class="mr-4" variant="info">
            <router-link to="/register" style="color: #fff">
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
