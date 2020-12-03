<template>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{{title}}</h4>
            <p class="">{{text}}</p>
          </div>
</template>

<script>
export default {
  name: 'Plan',
  props: {
      title: String,
      text: String
  }
}
</script>

<style lang="css">

</style>


