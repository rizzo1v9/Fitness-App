<template>
    <div>

  <h1 class="title">New Users Sign Up</h1>
  <div class="field">
    <label class="label">First Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g Alex">
    </div>
  </div>

 
  <div class="field">
    <label class="label">Last Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g Smith">
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g carlorizzo33@gmail.com">
    </div>
  </div>

  <div class="field">
    <label class="label">Passowrd</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g zzxxcc111">
    </div>
    </div>
    <Footer>
    </Footer>
    </div>

</template>

<script>
import Footer from "../components/Footer.vue";
export default{
    components: {
        
        Footer
    
    }


}
</script>

<style>

</style>