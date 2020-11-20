<template>
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
            <Person name="Petra Roman" img="team/1.jpg" role= "team member"></Person>
            <Person name="Mirec" img="team/2.jpg" role= "team member"></Person>
            <Person name="Misko" img="team/3.jpg" role= "team member"></Person>
        </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
    </section>
</template>

<script>

import Person from './Person'
export default {
  name: 'People',
  components: {
      Person
  }
}
</script>

<style lang="css">

</style>


