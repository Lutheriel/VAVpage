<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted">{{ about }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <AboutPart
              v-for="about in data"
              :key="about.id"
              :time="about.year"
              :text="about.text"
              :heading="about.title"
              :img="preUrl + about.img.url"
              :toright="about.toright"
            ></AboutPart>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h3><br /><br />2020 <br /></h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutPart from "./AboutPart";
const axios = require("axios");
export default {
  name: "About",
  props: {
    about: String,
  },
  components: {
    AboutPart,
  },
  data: function() {
    return {
      data: [],
      preUrl: process.env.VUE_APP_BASE_URL,
    };
  },
  mounted() {
    axios.get(process.env.VUE_APP_BASE_URL + "/abouts").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style lang="css"></style>
