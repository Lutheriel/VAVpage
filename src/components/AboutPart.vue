<template>
  <li v-bind:class="[toright ? 'timeline-inverted' : '']">
    <div class="timeline-image">
      <img
        class="rounded-circle img-fluid"
        :src= img
        alt=""
      />
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4>{{ time }}</h4>
        <h4 class="subheading">{{ heading }}</h4>
      </div>
      <div class="timeline-body">
        <p class="">{{ text }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "AboutPart",
  props: {
    time: String,
    heading: String,
    img: String,
    text: String,
    toright: Boolean,
  },
};
</script>

<style lang="css"></style>
