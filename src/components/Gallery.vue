<template>
  <section id="gallery">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">
            <h2 class="section-heading text-uppercase">Galéria</h2>
            <!-- <h3 class="section-subheading text-muted"></h3> -->
          </div>
        </md-card-header>

        <md-card-content>
          <img
            class="image"
            v-for="(image, i) in images"
            :src="preUrl + image.url"
            @click="index = i"
            :key="image.id"
          />
          <vue-gallery-slideshow
            :images="imagesUrl"
            :index="index"
            @close="index = null"
          ></vue-gallery-slideshow>
        </md-card-content>
      </md-card>
  </section>
</template>
<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  name: "Gallery",
  components: {
    VueGallerySlideshow,
  },
  props: {
    about: String,
  },
  data: function() {
    return {
      images: JSON.parse(localStorage.getItem("photos")),
      preUrl: process.env.VUE_APP_API,
      index: null,
    };
  },
  computed: {
    imagesUrl() {
      return JSON.parse(localStorage.getItem("photos")).map(
        (image) => process.env.VUE_APP_API + image.url
      );
    },
  },
};
</script>

<style lang="css">
.md-card {
  margin: 2%;
  background-color: rgba(232, 230, 211, 0.8) !important;
}
#services .md-card:hover {
  transform: scale(1.025);
}

.image {
  width: 250px;
  height: 250px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
</style>
