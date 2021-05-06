<template>
  <div class="home">
    <div class="hero-css">
    <section class="hero is-danger">
        <div class="hero-body">
          <p class="title">
            Rizzo Fitness
          </p>
          <p class="subtitle">
            By Carlo Rizzo
          </p>
        </div>
        </section>
        </div>
           <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a Workout for Each Muscle Group">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                
                placeholder="e.g. Biceps"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
             <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
        <div class="content-item">
  <div class="tile is-child box">
        <p class="title">Results start when you do</p>
        <p>When it comes to starting a diet and working out, we always tell ourselves we'll start tomorrow or we'll start on Monday.
          This mindset will not get you far when it comes to achieving the results you want. 

          
        </p>
        
            
            
        </div>

        
      </div> 
      
<Footer>
    </Footer>
  
  </div>
</template>

<script>




import Footer from "../components/Footer.vue";


export default {
  data(){
    return {
      workouts: [],
                name: '',
                selected: null,
      
        carousels: [
               { text: 'Get the best fitness information here!', color: 'primary' },
                { text: 'Track your progress!', color: 'info' },
                { text: 'Add friends!', color: 'success' },
                
                  ]
          }
  
    
        },
        mounted(){
          fetch('http://localhost:3000/workouts')
            .then(res => res.json())
            .then(data => this.workouts = data)
            .catch(err => console.log(err.message))
        },
        components: {
        Footer
    },
computed: {
            filteredDataArray() {
                return this.workouts.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
}

</script>
<style>
.content-item {
    border: solid;
    border-color:black;
}
.hero-css {
  border: solid;
  border-color:black;
}
</style>
