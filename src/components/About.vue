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
              v-for="(about, index) in data"
              :key="about.id"
              :time="about.year"
              :text="about.text"
              :heading="about.title"
              :img="preUrl + about.img.url"
              :toright="setIsRight(index)"
            ></AboutPart>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h3 class= "now">2020 </h3>
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
      preUrl: process.env.VUE_APP_API + '/api',
      toright: false
    };
  },
  mounted() {
    axios.get("/abouts").then((response) => {
      this.data = response.data;
    });
  },
  methods: {
    setIsRight: function(index){
      return index % 2 == 0;
    }
  }
};
</script>

<style lang="css">
@media (min-width: 950px) {
.now{
  margin: auto;
  margin-top: revert;
  padding-top: 32px;
}
}
@media (max-width: 950px) {
.now{
  margin: auto;
  margin-top: revert;
  font-size: 22px !important;
}
}

</style>
