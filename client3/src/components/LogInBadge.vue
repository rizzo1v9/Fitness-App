<template>
    <div>

        <div class="buttons" v-if="!Session.user">
            <router-link to="/Signup" class="button">

            <strong>Sign up</strong>
            </router-link>
            <a class="button is-primary">
                
            </a>
            <router-link to="/Login" class="button is-light" @click.prevent="login">
                Log in
            </router-link>
        </div>
        <div v-else>
            Hello {{Session.user.firstName}} {{Session.user.lastName}} {{Session.user.email}}
            (<a @click.prevent="logout">
                Log out
            </a>)
        </div>
    </div>
</template>

<script>
import Session, { Logout } from "../models/Session";
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.$router.push('Login');
        },
        logout(){
            Logout();
        }
    }
}
</script>

<style>
</style> 