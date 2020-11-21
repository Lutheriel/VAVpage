<template>
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Guests</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
            <Person name="Petra" img="team/Petra.jpg" role= "team member" desc="mala by som ist spat"></Person>
            <Person name="Brunik" img="team/Bruno.jpg" role= "Team Leader" desc="daj pls pripomienky nech ich co najskor zapracujem"></Person>
            <Person name="Mirec" img="team/Mirec.jpg" role= "team member"></Person>
            <Person name="Michal" img="team/Michal.jpg" role= "team member" desc="test testin testing really hardo"></Person>
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
const axios = require('axios');
import Person from './Person'
export default {
  name: 'People',
  components: {
      Person
  },
  methods: {
    mounted(){
      axios.get('/guests')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
  }
}

</script>

<style lang="css">

</style>


