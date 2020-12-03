<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <md-card md-with-hover>
              <md-card-header>
                <div class="md-title">
                  <h2 class="section-heading text-uppercase">VAV</h2>
                </div>
              </md-card-header>

              <md-card-content>
                <h3 class="section-subheading">{{ about }}</h3>
                <img class="resize" src="../assets/img/brunik.jpg" alt="VAV" />
              </md-card-content>
          </md-card>
        </div>
      </div>

      <!-- <div class="row text-center">
        <Plan
          v-for="plan in data"
          :key="plan.id"
          :title="plan.title"
          :text="plan.text"
        ></Plan>
      </div> -->
    </div>
  </section>
</template>

<script>
const axios = require("axios");
// import Plan from "./Plan";
export default {
  name: "Plans",
  components: {
    // Plan,
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
    axios.get("/plans").then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style lang="css">
.md-card {
  background-color: rgba(232, 230, 211, 0.8) !important;
}
#services .md-card:hover{
transform: scale(1.025);
}
img.resize {
  max-width: 60%;
  max-height: 60%;
}
</style>
