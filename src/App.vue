<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Planner msg="Lets go"/>
    <Content/>
  </div>
</template>

<script>
import Planner from "./components/Planner.vue";
import Content from "./components/Content.vue";

export default {
  name: "app",
  components: {
    Planner,
    Content
  },
  data: function(){
    return {
      token: '1478292659.1677ed0.b49e74628f6f4c7e87975166a47a0f3a'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
