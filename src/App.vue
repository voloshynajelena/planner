<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Planner msg="Make your instagram awesome"/>
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
  }
};
</script>