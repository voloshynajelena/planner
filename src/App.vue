<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Planner msg="Make your instagram awesome"/>
    <Content/>

    <div class="images flex-grid">
      <div class="flex-col">
        <div 
          class="flex-item"
          :key='index'
          v-for="(img, index) in images" >

          <img 
            :src="img.url" 
            :width="img.width" 
            height="auto" 
            alt="">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Planner from "./components/Planner.vue";
import Content from "./components/Content.vue";

/**
 * url: `https://api.instagram.com/v1/users/self/media/recent`,
        data: { access_token: this.token, count: this.count },
 */

/**
 * axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 */

export default {
  name: "app",
  components: {
    Planner,
    Content
  },
  data: function() {
    return {
      token: "1478292659.1677ed0.45b0a26e1e1a4c30a3a85e62931265e0",
      api: "https://api.instagram.com/v1/users/self/media/recent",
      images: []
    };
  },
  mounted() {
    this.axios
      .get(this.api, {
        params: {
          access_token: this.token,
          count: "15"
        }
      })
      .then(response => {
        // eslint-disable-next-line
        console.log(response.data.data);
        response.data.data.map(item => this.images.push(item.images.standard_resolution))
      });
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
.flex-grid {
  display: flex;
  justify-content: center;
}
.flex-col {
  width: 30vw;
  flex-wrap: wrap;
  display: flex;
}
.flex-item {
  width: 10vw;
  height: 10vw;
  border: 1.2px solid white;
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: center;
}
.flex-item img {
  width: 100%;
}
</style>
