<template>
  <section class="bg-light" id="gallery">
  <h2 class="section-heading text-uppercase">Gallery</h2>
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
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }
.gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
h2{
  text-align: center;
  font-size: 2rem;
  margin-bottom: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}  
</style>
