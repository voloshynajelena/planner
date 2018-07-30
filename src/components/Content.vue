<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
      <button class="button" @click="showPopup" v-if="!isLogin">Login</button>
      <input type="file" multiple v-on:change="getImages" name="file" id="file" class="inputfile" />
      <label for="file" v-show='isLogin' >+</label>    
    
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
import draggable from "vuedraggable";

export default {
  name: "Content",
  data: function() {
    return {
      token: "1478292659.1677ed0.45b0a26e1e1a4c30a3a85e62931265e0",
      api: "https://api.instagram.com/v1/users/self/media/recent",
      url: "https://api-insta-planner.herokuapp.com/",
      msg: "Download images:",
      images: [],
      isLogin: false
    };
  },
  components: {
    draggable
  },
  methods: {
    showPopup() {
      const _this = this;
      const swal = this.$alert;
      swal
        .mixin({
          input: "text",
          confirmButtonText: "Next &rarr;",
          showCancelButton: true,
          progressSteps: ["1", "2"]
        })
        .queue([
          {
            title: "Login",
            text: "Enter your login"
          },
          {
            title: "Pass",
            text: "Enter your Pass"
          }
        ])
        .then(result => {
          const login = result.value[0];
          const pass = result.value[1];

          swal.showLoading();

          if (!!login && !!pass) {
            this.authorization({ login, pass })
              .then(function(res) {
                res = res || {};

                const isSuccess = res.data.autorization === "success";

                if (isSuccess) {
                  swal({
                    type: "success",
                    title: "All done!",
                    text: "Success",
                    confirmButtonText: "Lovely!"
                  });

                  _this.isLogin = true;
                  _this.getInstaData();
                } else {
                  swal({
                    type: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: "<a href>Why do I have this issue?</a>",
                    onClose() {
                      _this.showPopup();
                    }
                  });
                }
              })
              .catch(res => {
                swal.showValidationError(`Request failed: ${res}`);
              });
          }
        })
        .catch(res => {
          swal.showValidationError(`Request failed: ${res}`);
        });
    },

    authorization({ login, pass }) {
      return this.axios.post(
        this.url + "login",
        JSON.stringify({ login: login, pass: pass })
      );
    },

    getImages(e) {
      let files = e.target.files;
      let images = this.images;

      for (let i = 0; i < files.length; i += 1) {
        var reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = function(e) {
          images.unshift(e.target.result);
        };
      }
    },
    getInstaData() {
      this.axios
        .get(this.api, {
          params: {
            access_token: this.token,
            count: "15"
          }
        })
        .then(response => {
          response.data.data.map(item =>
            this.images.push(item.images.standard_resolution.url)
          );
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
button,
.button {
  background-color: #3085d6;
  color: #fff;
  border: 0;
  box-shadow: none;
  font-size: 1.125em;
  font-weight: 500;
  border-radius: 0.1875em;
  padding: 0.9em 2.1875em;
  cursor: pointer;
  white-space: nowrap;
}
button:active,
.button:active {
  background-color: #236bb0;
}
.button:hover {
  background-color: #297dce;
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
  display: flex;
  align-items: center;
}
.flex-item img {
  width: 100%;
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
  outline: none !important;
}
.inputfile:focus + label,
.inputfile + label:hover {
  outline: 0;
  background-color: #bababae0;
  color: white;
  border-color: #bababae0;
}
label,
input:focus,
input:active {
  outline: 0;
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
