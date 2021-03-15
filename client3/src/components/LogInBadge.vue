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
            <h1>Carlo Rizzo</h1>
            (<a @click.prevent="logout">
                Log out
            </a>)
        </div>
    </div>
</template>

<script>
import Session, {Login, Logout} from "../models/Session";
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            Login();
        },
        logout(){
            Logout();
        }
    }
}
</script>

<style>
</style> 