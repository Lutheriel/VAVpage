<template>
  <div class="col-sm-4">
    <div class="team-member">
      <img class="mx-auto rounded-circle" :src="img" alt="" />
      <h4>{{ name }}</h4>
      <p class="text-muted">{{ role }}</p>
      <p class="text-dark">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    name: String,
    img: String,
    role: String,
    desc: String,
  },
};
</script>

<style lang="css"></style>
