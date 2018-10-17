<template>
  <div class="container">
    <h1 align="center">Vue-APlayer</h1>
    <h3>Featured</h3>
    <aplayer
      theme="pic"
      shuffle
      repeat="list"
      show-lrc
      :muted.sync="muted"
      :volume.sync="volume"
      :music='list3[0]'
      :list='list3'
    />
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  name: 'MusicPlayer',
  components: {
    Aplayer
  },
  created() {
    console.log('in created')
    var i = 3
    while (i > 0) {
      let obj = {
        artist: 'Tram Quoc Bao',
        src: require('../assets/mc.mp3'),
        pic: require('../assets/photo2.jpg')
      }
      this.list3.push(obj)
      i = i - 1
      console.log(i)
    }
    console.log(this.list3)
  },
  data() {
    return {
      volume: 1,
      muted: false,
      music3: null,
      list3: [
        
      ]
      // list3: [
      //   {
      //     title: '前前前世',
      //     artist: 'RADWIMPS',
      //     src: 'http://0.0.0.0:3000/aplayer/yourname.mp3',
      //     pic: require('../assets/mc-really-long-ass-url-without-space.jpg')
      //   },
      //   {
      //     title: '光るなら.m3u8',
      //     artist: 'Goose house',
      //     src: 'http://0.0.0.0:3000/aplayer/hls/hikarunara.m3u8',
      //     pic: 'mc.jpg',
      //     lrc: 'http://0.0.0.0:3000/aplayer/hikarunara.lrc'
      //   },
      //   {
      //     title: '回レ！雪月花',
      //     artist: '小倉唯',
      //     src: 'http://0.0.0.0:3000/aplayer/snowmoonflowers.mp3',
      //     pic: 'http://0.0.0.0:3000/aplayer/snowmoonflowers.jpg',
      //     lrc: 'http://0.0.0.0:3000/aplayer/snowmoonflowers.lrc'
      //   },
      //   {
      //     title: 'Funny',
      //     artist: 'Tram Quoc Bao',
      //     src: require('../assets/mc.mp3'),
      //     pic: require('../assets/photo2.jpg')
      //   }
      // ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>
