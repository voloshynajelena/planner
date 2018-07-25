/* eslint-disable */
<template>
  <div class="hello">
    <h5>{{ msg }}</h5>


          <input type="file" multiple v-on:change="getImages" name="file" id="file" class="inputfile" />
          <label for="file">+</label>
    
    
    <!-- <div class="square"
    v-for="(item, index) in images" :key='index'>
      <img :src="item" alt="">
    </div> -->
  <draggable v-model="images"  class="flex-grid">
    <transition-group class="flex-col">
        <div v-for="(item, index) in images" :key="index"  class="flex-item">
          
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
      msg: "Download images:",
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
input:focus {
  outline: none;
}
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.inputfile + label {
    font-size: 2.25em;
    font-weight: 400;
    color: #3c3c3c;
    border: 1px solid;
    padding: 5px;
    margin: 0 0 20px 0;
    line-height: 0.7em;
    border-radius: 23%;
    display: inline-block;
    transition: 0.1s;
}
.inputfile:focus + label,
.inputfile + label:hover {
        background-color: #bababae0;
    color: white;
    border-color: #bababae0;
}
.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}
.inputfile:focus + label {
	outline: 1px dotted #000;
	outline: -webkit-focus-ring-color auto 5px;
}
.inputfile + label * {
	pointer-events: none;
}
</style>
