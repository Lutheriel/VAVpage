<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto"  v-bind:class="{headerclass: scrollPosition < 630, bodyclass: scrollPosition > 630}">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">Plan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team">Guests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Photos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>

            <!-- <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
   data: function() {
    return {
    scrollPosition: null
  };
},
  
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
  window.removeEventListener('scroll', this.updateScroll)
} 
}

</script>

<style lang="css">
.headerclass .nav-item .nav-link{
color: white;
}
.headerclass .nav-item .nav-link:hover{
color: #fed136;
}
.bodyclass .nav-item .nav-link{
color: black !important;
}
.bodyclass .nav-item .nav-link:hover{
color: #fed136!important;
}
.nav-link{
  font-weight: bolder !important;
  z-index: 1;
}
</style>


