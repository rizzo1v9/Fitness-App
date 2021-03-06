<template>
  <div>
      <div class="columns">
      <div class=box>
          <label class="label">Add Friends By Email:</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g carlorizzo33@gmail.com">
          <button class="button">Add</button>
          <label class="label">Post Status:</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Just PR'd deadlifts!">
          <button class="button">Post</button>
        </div>
        </div>

        

      </div>
    <div class="column">
      
      <div class=box>
          <label class="label">My Friends:</label>
          <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Carlo Rizzo</strong> <small>carlorizzo33@gmail.com</small> <small>31m</small>
        
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        
      </div>
    </nav>
  </div>
  
</article>

 <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barrack Obama</strong> <small>realobama@gmail.com</small> <small>31m</small>
        
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        
      </div>
    </nav>
    </div>
 

  
    </article>
  </div>
        <div class="content-item" v-for="(status, i) in statuses" :key ="i">
        <Status :status="status" />
        
</div>
   
    </div>
    
    </div>
<Footer>
    </Footer>
  
  

      
      
      
  </div>

  
</template>

<script>
import Footer from "../components/Footer.vue";
import Status from "../components/Status.vue";
export default {
  data: ()=>  ({
        statuses: [
          {
            
            alt: "Placeholder image",
            text: "Just bought PDs from the guy in the locker room at the gym! #juicin",
            time: Date(), 
            user: {
                name: "Tanner Johnson",
                email: "tannerthedude123@gmail.com",
                pic: "https://bulma.io/images/placeholders/128x128.png"
                
            }
          }
        ]
  }),
  components: {
        Footer,
        Status
    
    }

}
</script>

<style>
  
</style>