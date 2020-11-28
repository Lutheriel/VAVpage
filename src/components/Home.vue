<template>
  <div id="home">
      <router-view />
    <div>
      <!-- Navigation -->
    <Navigation></Navigation>

    <!-- Header -->
    <Header></Header>

    <!-- Plans -->
    <Plans :about="data.planinfo"></Plans>

    <!-- People -->
    <People :about="data.guestsinfo"></People>
    
    <!-- About -->
    <About :about="data.aboutinfo"></About>

    <!-- Gallery Grid -->
    <Gallery :about="data.photosinfo"></Gallery>


    <!-- Footer -->
    <Footer></Footer>
    </div>

  </div>
</template>

<script>
const axios = require("axios");
import Gallery from "./Gallery";
import Navigation from "./Navigation";
import Header from "./Header";
import Plans from "./Plans";
import About from "./About";
import People from "./People";
import Footer from "./Footer";

export default {
  name: "home",
  components: {
    Gallery,
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
      localStorage.setItem('photos', JSON.stringify(this.data.gallery))
    });
  },
};
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
