<template>
  <div id="app">
    <!-- <div class="routing"> -->
    <Home />
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: { Home },
  name: 'App'
  // methods: {
  //   loadHome: function(){
  //     this.$router.push('/home').catch(() => {})
  //   }
  // },
  // mounted: function(){
  //   this.loadHome()
  // }
}
</script>