<template>
  <div id="app">
    <CoursesComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CoursesComponent from "./components/CoursesComponent.vue";

export default {
  name: "app",
  components: {
    CoursesComponent
  },
  created(){
    this.$store.commit("setHeight",{});
  }
};
</script>

<style>
</style>
