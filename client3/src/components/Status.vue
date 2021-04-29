<template>
  <div class="coulmn">
      <div class="box">
          <label class="label">My Feed:</label>
  <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img 
      :src="status.user.pic"
      :alt="status.alt"
      >
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      
      <p>
        <strong>`${status.user.name}</strong> <small>${status.user.email}`</small> <small>31m</small>
        <br>
        {{status.text}}
        <br>
        
        <small><time :datetime="status.time">{{status.time}}</time></small>
        
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
          </div>
          </nav>
          </div>
          
      </article>
      </div>
      </div>
</template>

<script>
export default {
    props: {
        status: Object
    }
}
</script>

<style>

</style>