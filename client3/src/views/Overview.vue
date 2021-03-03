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
    <p> March 1st, 2021: 153 calories burned </p>
    <p> February 29th, 2021: 102 calories burned </p>
    <p> February 28th: 0 calories burned </p>
    <p> February 27th: 95 calories burned </p>

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
<input class="input" type="text" placeholder="Text input">
<button class="button is-link">Submit</button>
</div>

</div>
<Footer>
    </Footer>
</div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
components: {
        Footer
    }
}
</script>

<style>

</style>