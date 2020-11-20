<template>
  <div id="app">

    <!-- Navigation -->
    <!-- <Navigation></Navigation> -->

    <!-- Header -->
    <Header></Header>

    <!-- Services -->
    <Services></Services>

    <!-- Portfolio Grid -->
    <Portfolio></Portfolio>

    <!-- About -->
    <About></About>
  
    <!-- People -->
    <People></People>

    <!-- Footer -->
    <Footer></Footer>

  </div>
</template>

<script>

import Portfolio from './components/Portfolio'
// import Navigation from './components/Navigation'
import Header from './components/Header'
import Services from './components/Services'
import About from './components/About'
import People from './components/People'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Portfolio,
    // Navigation,
    Header,
    Services,
    About,
    People,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}
</style>
