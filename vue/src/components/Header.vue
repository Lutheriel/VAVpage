<template>
  <header class="masthead">
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
    };
  },
  mounted() {
    axios.get("/header").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style lang="css"></style>
