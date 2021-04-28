<template>
<div>





 <div id="users">
      <div class="columns is-centered">
          <div class="column is-two-thirds">
<div class ="box">
<h1 class="title is-1">Users Page</h1>
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>

                    <tr v-for="user in users" :key="user.email">
                        <td>{{user.firstName}}</td>
                        <td>{{user.lastName}}</td>
                        <td>{{user.email}}</td>
                    </tr>

                </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    

</template>

<script>

import Vue from "vue";
import { GetAllUsers } from "../models/Users";

export default Vue.extend({
    data: ()=> ({
        users: []
    }),
    async mounted() {
        this.users = await GetAllUsers();
    },
    components: {
    },
    methods: {
    }
})
</script>

<style>

</style>