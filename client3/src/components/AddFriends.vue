<template>
<div>
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img :src="friend.src"
            :alt="friend.alt">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{friend.name}}</strong> <small>{{friend.email}}</small>
        <br>
      </p>
    </div>
    <nav class="level is-mobile">
     
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