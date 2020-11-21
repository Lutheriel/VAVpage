<template>
<section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <AboutPart 
              time="2009-2011" 
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              heading= "Our Humble Beginnings"
              img="1.jpg"
              toright
              ></AboutPart>
              <AboutPart 
              time="March 2011" 
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              heading= "An Agency is Born"
              img="2.jpg"
              ></AboutPart>
              <AboutPart 
              time="December 2012" 
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              heading= "Transition to Full Service"
              img="3.jpg"
              toright
              ></AboutPart>
              <AboutPart 
              time="July 2014" 
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              heading= "Phase Two Expansion"
              img="4.jpg"
              ></AboutPart>
              <AboutPart 
              time="August 2018" 
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
              heading= "test"
              img="4.jpg"
              toright
              ></AboutPart>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h3>
                    <br><br>2020
                    <br></h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import AboutPart from './AboutPart'
export default {
  name: 'About',
  components: {
    AboutPart
  }
}
</script>

<style lang="css">

</style>


