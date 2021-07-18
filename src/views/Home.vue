<template>
  <div class="home">
    <header id="header">
      <b-jumbotron
        header-tag="h2"
        header="Notekeeper"
        lead="Wszystkie notatki w jednym miejscu"
        id="header-jumbotron"
      >
        <p class="header-text">
          Dodawaj, usuwaj, nadawaj tagi i dziel się swoimi notatkami.
        </p>
        <div class="header-buttons">
          <b-button class="mr-4 mt-3" variant="success">
            <router-link to="/login">Zaloguj się</router-link>
          </b-button>
          <b-button class="mt-3" variant="info">
            <router-link to="/register">Zarejestruj się</router-link>
          </b-button>
        </div>
        <!-- <b-button variant="primary" href="#">More Info</b-button> -->
      </b-jumbotron>
    </header>
    <div class="container marketing mt-4">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <h2>Twórz</h2>
          <p class="lead font-weight-normal">
            Twórz nowe notatki dzięki którym o niczym już nie zapomnisz. Zapisuj
            wszystko co chcesz i kiedy chcesz.
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <h2>Edytuj</h2>
          <p class="lead font-weight-normal">
            Literówka, zmiana planów ? Nic strasznego możesz edytować notatkę z
            każdego urządzenia podłączonego do internetu.
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <h2>Udostępniaj</h2>
          <p class="lead font-weight-normal">
            Udostępniaj swoje notatki znajomym lub swojemu zespołowi. Podnoś
            produktywność i łatwość komunikacji.
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
#header {
  text-align: center;

  #header-jumbotron {
    background: rgba(0, 0, 0, 0.65);
    position: relative;
    color: #fff;
    margin-bottom: 0;
    height: 70vh;
    letter-spacing: 0.07em;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: url("~@/assets/header.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: 80%;
    }
    h2 {
      font-size: 3.7rem;
    }
    .header-buttons button {
      padding: 0;
    }
    .header-buttons button a {
      color: #fff;
      text-decoration: none;
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 6px 12px;
    }
    .header-text {
      font-weight: 300;
    }
  }
}
</style>
