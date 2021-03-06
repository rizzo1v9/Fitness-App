<template>
  <div class="coulmn">
      <div class="box">
          <label class="label">My Feed:</label>
  <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img 
      :pic="status.pic"
      :alt="status.alt"
      >
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      {{status.text}}
      <p>
        <strong>{{statuses.user.name}}</strong> <small>{{statuses.user.email}}</small> <small>31m</small>
        <br>
        <time datetime="statuses.time">{{statuses.time}}</time>
        
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