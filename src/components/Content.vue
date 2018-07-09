/* eslint-disable */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="file" multiple v-on:change="getImages"/>
    <!-- <div class="square"
    v-for="(item, index) in images" :key='index'>
      <img :src="item" alt="">
    </div> -->
  <draggable v-model="images">
    <transition-group>
        <div v-for="(item, index) in images" :key="index">
          <img :src="item" alt="">
        </div>
    </transition-group>
</draggable>
  </div>

</template>

<script>
  import draggable from 'vuedraggable'


export default {
  name: "Content",
  data: function() {
    return {
      msg: "App is here",
      images: []
    };
  },
  components:{
    draggable
  },
  methods: {
    getImages(e) {
      // console.log(e.target.files)
      let files = e.target.files;
      let images = this.images;

      for (let i = 0; i < files.length; i += 1) {
        var reader = new FileReader();
        reader.readAsDataURL(files[i]);

        reader.onload = function(e) {
          images.push(e.target.result);
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
  height: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
