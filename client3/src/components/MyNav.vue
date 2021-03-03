<template>
        <nav class="navbar container is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
         
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">

          <router-link to="/" class="navbar-item" >Home</router-link>
          <router-link to="/Diet" class="navbar-item">Diet</router-link>
          <router-link to="/Training" class="navbar-item">Training</router-link>
          <router-link to="/Overview" class="navbar-item">Overview</router-link>
          <router-link to="/Friends" class="navbar-item">Friends</router-link>
          <router-link to="/AdminPage" class="navbar-item">Super top secret admin page</router-link>
            
           
          </div>
      
          <div class="navbar-end">
        
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-info">
                  <router-link to="/SignUp"  class="navbar-item">Sign Up</router-link>
                
                 <router-link to="/LogIn"  class="navbar-item">Log in</router-link>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

</template>

<script>
export default {
}
</script>

<style>
</style>