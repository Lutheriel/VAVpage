<template>
  <section class="bg-light" id="gallery">
  <h2 class="section-heading text-uppercase">Gallery</h2>
            <h3 class="section-subheading text-muted"></h3>
    <img class="image" v-for="(image, i) in images" :src="preUrl + image.url" @click="index = i" :key="image.id">
  <vue-gallery-slideshow :images="imagesUrl" :index="index" @close="index = null"></vue-gallery-slideshow>
  </section>
</template>
<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
  name: "Gallery",
  components: {
    VueGallerySlideshow
  },
  props: {
    about: String,
  },
  data: function() {
    return {
      images: JSON.parse(localStorage.getItem('photos')),
      preUrl: process.env.VUE_APP_API,
      index: null
    };
  },
  computed: {
    imagesUrl(){
        return JSON.parse(localStorage.getItem('photos')).map(image => process.env.VUE_APP_API + image.url);
    }
  }
};
</script>

<style lang="css">
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
