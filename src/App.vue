<template>
  <div id="app">
    <div class="routing">
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    loadHome: function(){
      this.$router.push('/home').catch(() => {})
    }
  },
  mounted: function(){
    this.loadHome()
  }
}
</script>