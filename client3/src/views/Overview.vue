<template>
  <div>
    <div class="box">
      Name: John Smith
      <p>Age: 24</p>
      <p>Weight: 172.4 LBS</p>
      <p>Height: 175 CM</p>
    </div>

    <div class="box">
      Workout History

      <div class="content-item" v-for="(log, i) in logs" :key="i">
        <Log :log="log" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-four-fifths"></div>
      <div class="box">
        Record your Workout:
        <div class="select">
          <select>
            <option>Select form of exercise</option>
            <option>Cardiovascular</option>
            <option>Weight Training</option>
          </select>
        </div>
        Enter Calories burned:
        <form @submit.prevent="addLog">
        <input class="input" type="text" placeholder="Text input"
        v-model="newLog.log" />
        <button class="button is-link">Submit</button>
        </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import Log from "../components/Log.vue";
export default {
  data: () => ({
    logs: {
      calories: 153,
    },
    
    newLog:{
      user:{}
    }
    
  }),
 
  components: {
      Log
    },

  methods: {
    addLog() {
      this.logs.unshift(this.newLog);
      this.newLog = { user: {} };
    },
  },
};
</script>

<style>
</style>