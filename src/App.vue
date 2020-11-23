<template>
  <div id="app">
    <!-- Navigation -->
    <Navigation></Navigation>

    <!-- Header -->
    <Header></Header>

    <!-- Plans -->
    <Plans :about="data.planinfo"></Plans>

    <!-- People -->
    <People :about="data.guestsinfo"></People>

    <!-- Portfolio Grid -->
    <Portfolio :about="data.photosinfo"></Portfolio>

    <!-- About -->
    <About :about="data.aboutinfo"></About>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
const axios = require("axios");
import Portfolio from "./components/Portfolio";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Plans from "./components/Plans";
import About from "./components/About";
import People from "./components/People";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Portfolio,
    Navigation,
    Header,
    Plans,
    About,
    People,
    Footer,
  },
  data: function() {
    return {
      data: [],
    };
  },
  mounted() {
    axios.get("/section-info").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}
</style>
