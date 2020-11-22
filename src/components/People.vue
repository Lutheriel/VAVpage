/* eslint-disable vue/require-v-for-key */ /* eslint-disable no-console */
<template>
  <section class="bg-light" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Guests</h2>
          <h3 class="section-subheading text-muted">{{ about }}</h3>
        </div>
      </div>
      <div class="row">
        <Person
          v-for="person in data"
          :key="person.id"
          :name="person.name"
          :img="preUrl + person.img.url"
          :role="person.role"
          :desc="person.text"
        ></Person>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import Person from "./Person";
export default {
  name: "People",
  components: {
    Person,
  },
  props: {
    about: String,
  },
  data: function() {
    return {
      data: [],
      preUrl: process.env.VUE_APP_BASE_URL,
    };
  },
  mounted() {
    axios.get(process.env.VUE_APP_BASE_URL + "/guests").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style lang="css"></style>
