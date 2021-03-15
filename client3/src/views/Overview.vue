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

      <div class="history" v-for="(log, i) in logs" :key="i">
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
        <div class="history">
        <button class="button is-link">Submit</button>
        </div>
        </form>
      </div>
      
    </div>
    <div class="coulmns">
      <div class="column is-one-third">
        <div class="box">
          
          <label> My Progress: </label>
          <div class="progress-bar">
          </div>
    <progress class="progress is-warning" value="0" max="100">75%</progress>
  </div>
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
.history {
    margin-top: 10px;
    margin-bottom: 10px;
}

.progess-bar{
   margin-top: 10px;
    margin-bottom: 10px;
}
</style>