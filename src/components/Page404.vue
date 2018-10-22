<template>
  <div>
    <img :src="imageFile" alt="Page Not Found" height="300" width="300">
    <h1>whoops!</h1>
    <h3>we couldn't find the page you are looking for</h3>
    <!-- <router-link :to="{name: '/'}"> -->
      <button class="button" @click="randomFile" >Go Home!</button>
    <!-- </router-link> -->
  </div>
</template>
<script>
  export default {
    name: 'Page404',
    data() {
      return {
        imageFile: ''
      }
    },
    created() {
      // this.imageFile = '../../static/404.4.jpg'
      var images = require.context('../../static/', false, /\.jpg$/)
      var index = Math.floor(Math.random() * 5)
      this.imageFile = images('./404.' + index + '.jpg')
    },
    methods: {
      randomFile() {
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
h1,h3 {
  color: rgb(177, 176, 176);
}

button {
    background-color: rgb(94, 165, 240);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

</style>

