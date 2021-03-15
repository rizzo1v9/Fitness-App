<template>
  <div>
    <div class="columns">
      <div class="box">
        <form @submit.prevent="addFriend">
        <label class="label">Add Friends By Email:</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g carlorizzo33@gmail.com"
            v-model="newFriend.email"
          />
          <div class="content-item">
          <button class="button is-link">Submit</button>
          </div>
        </div>
        </form>
        
      </div>
      
    </div>
    <div class="column">
      <div class="box">
        <label> My Friends: </label>
        <div class="content-item" v-for="(friend, i) in friends" :key="i">
        <IndividualFriend :friend="friend"/>
      </div>
      </div>

   

    
    </div>
    <div class="content-item">
      <div class="coulmn">
        <div class="box">
          <form @submit.prevent="addStatus">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Text input"
                  v-model="newStatus.user.name"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  placeholder="Email"
                  v-model="newStatus.user.email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="text"
                  v-model="newStatus.text"
                />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="content-item" v-for="(status, i) in statuses" :key="i">
      <Status :status="status" />
    </div>
  </div>
</template>

<script>
import Status from "../components/Status.vue";
import AddFriends from "../components/AddFriends";
export default {
  data: () => ({
    friends: [
      {
        alt: "Placeholder image",
        
        src: "https://bulma.io/images/placeholders/128x128.png",
        name: "Carlo Rizzo",
        email: "carlorizzo33@gmail.com",
        
        
      },
    ],

    newFriend:{
        user:{}
    },

    newStatus: {
      user: {pic: "https://bulma.io/images/placeholders/128x128.png"},
    },
    statuses: [
      {
        alt: "Placeholder image",
        text:
          "Just bought PDs from the guy in the locker room at the gym! #juicin",
        time: Date(),
        user: {
          name: "Tanner Johnson",
          email: "tannerthedude123@gmail.com",
          
        },
      },
    ],
  }),

  components: {
    Status,
    IndividualFriend: AddFriends
  },
  methods: {
    addStatus() {
      this.statuses.unshift(this.newStatus);
      this.newStatus = { user: {pic: "https://bulma.io/images/placeholders/128x128.png"} };
    },
    addFriend() {
      this.friends.unshift(this.newFriend);
      this.newFriend = { user: {} };
    },
  },
};
</script>

<style>
</style>