<template>
  <header class="masthead" v-bind:style="[ isBackground ? backgroundImage: '']">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">{{ data.toptitle }}</div>
        <div class="intro-heading text-uppercase">{{ data.maintitle }}</div>
      </div>
    </div>
  </header>
</template>

<script>
const axios = require("axios");
export default {
  name: "Header",
  data: function() {
    return {
      data: [],
      isBackground: false,
      preUrl: process.env.VUE_APP_API,
    };
  },
  mounted() {
    axios.get("/header").then((response) => {
      this.data = response.data;
      if(this.data.HeaderImage) {
        this.isBackground= true
      }
    });
  },
  computed: {
    backgroundImage() {
      return {
        "background-image": 'url(' + this.preUrl + this.data.HeaderImage.url + ') !important'
      };
    }
  }
};
</script>

<style lang="css">
/* .backgroundImage{
  background-image:url(../assets/img/header-bg-copy.jpg) !important
} */
</style>
