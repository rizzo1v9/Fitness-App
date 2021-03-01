<template>
    <MyNav>

      <h1 class="title">Existing Users Log In
    <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g carlorizzo33@gmail.com">
        </div>
      </div>
  </h1>

  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="text" placeholder="e.g zzxxcc111">
    </div>
  </div>
  
</template>

<script>
import MyNav from "../components/MyNav";
export default{
    components: {
        MyNav
    }


}
</script>

<style>

</style>