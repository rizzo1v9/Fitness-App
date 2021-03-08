<template>
<div>
<label class="label">My Friends:</label>
          <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img :src="friend.src">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{friend.name}}</strong> <small>{{friend.email}}</small> <small>31m</small>
        
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        
      </div>
    </nav>
    </div>
    </article>
    </div>
</template>

<script>
export default {
        props: {
            friend: Object
        }
}
</script>

<style>

</style>