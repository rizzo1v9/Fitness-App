<template>
    <div>
     
    <div v-if="!Session.user">
       <form @submit.prevent="login">

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
    <div class="loginbutton">
    <button class="button is-link" type="submit"> Log In </button>
  </div>
  </div>
  </form>
  </div>
  
    <Footer>
    </Footer>
        </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Session, {Login} from "../models/Session";

export default{
  data() {
    return{
      Session
    }
  },
    components: {
        Footer
    },
methods: {
      login(){
            Login();
        },

}}
</script>

<style>
.loginbutton {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>