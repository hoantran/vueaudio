<template>
  <div class="container">
    <h1 align="center">Vue-APlayer</h1>
    <h3>Featured</h3>
    <aplayer
      theme='pic'
      repeat='list'
      :muted.sync='muted'
      :volume.sync='volume'
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
    this.list3 = this.getMetaData()


    // var i = 3
    // while (i > 0) {
    //   let obj = {
    //     artist: 'Tram Quoc Bao',
    //     src: require('../assets/mc.mp3'),
    //     pic: require('../assets/photo2.jpg')
    //   }
    //   this.list3.push(obj)
    //   i = i - 1
    //   console.log(i)
    // }
    // console.log(this.list3)
  },
  methods: {
    getMetaData() {
      return [
              {
                artist: 'Lê Bích Trâm',
                title: 'MC',
                pic: require('../assets/mtce24/01 mc/mc.jpg'),
                src: require('../assets/mtce24/01 mc/mc.mp3')
              },
              {
                title: 'Libertango',
                artist: 'Nguyễn Vân Anh',
                src: require('../assets/mtce24/02 libertango/libertango.mp3'),
                pic: require('../assets/mtce24/02 libertango/vananh.jpg')
              },
              {
                artist: 'Nguyễn Vân Anh',
                title: 'Under Paris Skies',
                src: require('../assets/mtce24/03 under paris skies/paris.mp3'),
                pic: require('../assets/mtce24/03 under paris skies/vananh.jpg')
              },
              {
                artist: 'Lê Bích Trâm',
                title: 'MC',
                pic: require('../assets/mtce24/04 mc/mc.jpg'),
                src: require('../assets/mtce24/04 mc/mc.mp3')
              },
              {
                title: 'Ngậm Ngùi',
                artist: 'Teresa Mai',
                src: require('../assets/mtce24/05 ngam ngui/ngamngui.mp3'),
                pic: require('../assets/mtce24/05 ngam ngui/teresamai.jpg')
              },
              {
                title: 'Nella Fantasia',
                artist: 'Teresa Mai',
                src: require('../assets/mtce24/06 nella fantasia/nellafantasia.mp3'),
                pic: require('../assets/mtce24/06 nella fantasia/teresamai.jpg')
              },
              {
                artist: 'Lê Bích Trâm',
                title: 'MC',
                pic: require('../assets/mtce24/07 mc/mc.jpg'),
                src: require('../assets/mtce24/07 mc/mc.mp3')
              },
              {
                title: 'Hàn Mặc Tử',
                pic: require('../assets/mtce24/08 han mac tu/ductuan.jpg'),
                src: require('../assets/mtce24/08 han mac tu/hanmactu.mp3'),
                artist: 'Đức Tuấn'
              },
              {
                title: 'Tình Đầu Tình Cuối',
                pic: require('../assets/mtce24/09 tinh dau tinh cuoi/ductuan.jpg'),
                src: require('../assets/mtce24/09 tinh dau tinh cuoi/tinhdautinhcuoi.mp3'),
                artist: 'Đức Tuấn'
              },
              {
                title: 'Chiếu Áo Bà Ba',
                src: require('../assets/mtce24/10 chiec ao ba ba/chiecaobaba.mp3'),
                pic: require('../assets/mtce24/10 chiec ao ba ba/ductuan.jpg'),
                artist: 'Đức Tuấn'
              },
              {
                title: 'Chiều Về Trên Sông',
                src: require('../assets/mtce24/11 chieu ve tren song/chieuvebensong.mp3'),
                pic: require('../assets/mtce24/11 chieu ve tren song/ductuan.jpg'),
                artist: 'Đức Tuấn'
              },
              {
                title: 'Yêu Em Vào Cõi Chết',
                pic: require('../assets/mtce24/12 yeu em vao coi chet/ductuan.jpg'),
                src: require('../assets/mtce24/12 yeu em vao coi chet/yeuemvaocoichet.mp3'),
                artist: 'Đức Tuấn'
              },
              {
                artist: 'Lê Bích Trâm',
                title: 'MC',
                pic: require('../assets/mtce24/15 mc/mc.jpg'),
                src: require('../assets/mtce24/15 mc/mc.mp3')
              },
              {
                title: 'Chiếc Lá Cuối Cùng',
                artist: 'Ngọc Anh',
                src: require('../assets/mtce24/16 chiec la cuoi cung/chieclacuoicung.mp3'),
                pic: require('../assets/mtce24/16 chiec la cuoi cung/ngocanh.jpg')
              },
              {
                artist: 'Ngọc Anh',
                title: 'Nỗi Nhớ Mùa Đông',
                pic: require('../assets/mtce24/17 noi nho mua dong/ngocanh.jpg'),
                src: require('../assets/mtce24/17 noi nho mua dong/noinhomuadong.mp3')
              },
              {
                artist: 'Ngọc Anh',
                title: 'Trái Tim Tôi Mùa Thu',
                pic: require('../assets/mtce24/18 trai tim toi mua thu/ngocanh.jpg'),
                src: require('../assets/mtce24/18 trai tim toi mua thu/traitimtoimuathu.mp3')
              },
              {
                title: 'Khúc Mùa Thu',
                artist: 'Ngọc Anh',
                src: require('../assets/mtce24/19 khuc mua thu/khucmuathu.mp3'),
                pic: require('../assets/mtce24/19 khuc mua thu/ngocanh.jpg')
              },
              {
                title: 'Sponsors and Video',
                artist: 'Thư and Lan Phương',
                src: require('../assets/mtce24/21 sponsors and video/sponsors.mp3'),
                pic: require('../assets/mtce24/21 sponsors and video/thulanphuong.png')
              }
            ]
    }
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
