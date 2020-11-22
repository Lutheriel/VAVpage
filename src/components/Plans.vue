<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Plan</h2>
          <h3 class="section-subheading text-muted">{{ about }}</h3>
        </div>
      </div>
      <div class="row text-center">
        <Plan
          v-for="plan in data"
          :key="plan.id"
          :title="plan.title"
          :text="plan.text"
        ></Plan>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import Plan from "./Plan";
export default {
  name: "Plans",
  components: {
    Plan,
  },
  props: {
    about: String,
  },
  data: function() {
    return {
      data: [],
    };
  },
  mounted() {
    axios.get(process.env.HEROKU_APP_NAME + "/plans").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style lang="css">
section {
  background-color: #e8f5e1;
}
</style>
