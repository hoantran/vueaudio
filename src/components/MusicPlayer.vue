<template>
  <div>
    <a href="https://vnhelp.org"><img src="../../static/vnhelplogo.jpg" alt="VNHELP LOGO" height="150" width="150"></a>
    <div class="container">
      <h1 align="center">MÙA THU CHO EM 24</h1>
      <h3>2018.10.13 - SANTA ANA</h3>
      <aplayer
        theme='pic'
        repeat='list'
        :muted.sync='muted'
        :volume.sync='volume'
        :music='list3[0]'
        :list='list3'
      />
    </div>
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
  },
  {
    title: 'Instrumental',
    artist: 'The Upbeat Band',
    src: require('../assets/mtce24/50 upbeat band/upbeat.mp3'),
    pic: require('../assets/mtce24/50 upbeat band/upbeatband.jpg')
  },
  {
    artist: 'Lê Bích Trâm',
    title: 'MC',
    pic: require('../assets/mtce24/52 mc/mc.jpg'),
    src: require('../assets/mtce24/52 mc/mc.mp3')
  },
  {
    title: 'Làng Tôi',
    artist: 'Mê Linh',
    src: require('../assets/mtce24/54 lang toi/langtoi.mp3'),
    pic: require('../assets/mtce24/54 lang toi/langtoi.jpg')
  },
  {
    artist: 'Mê Linh',
    title: 'O Mio Babbino Caro',
    pic: require('../assets/mtce24/56 o mio babbino caro/dadandchild.jpg'),
    src: require('../assets/mtce24/56 o mio babbino caro/omio.mp3')
  },
  {
    artist: 'Lê Bích Trâm',
    title: 'MC',
    pic: require('../assets/mtce24/60 mc/mc.jpg'),
    src: require('../assets/mtce24/60 mc/mc.mp3')
  },
  {
    title: 'Ngày Xưa Hoàng Thị',
    pic: require('../assets/mtce24/62 ngay xua hoang thi/ductuan.jpg'),
    src: require('../assets/mtce24/62 ngay xua hoang thi/ngayxuahoangthi.mp3'),
    artist: 'Đức Tuấn'
  },
  {
    title: 'Tình Hờ',
    pic: require('../assets/mtce24/64 tinh ho/ductuan.jpg'),
    src: require('../assets/mtce24/64 tinh ho/tinhho.mp3'),
    artist: 'Đức Tuấn'
  },
  {
    title: 'Chiếc Lá Thu Phai',
    src: require('../assets/mtce24/66 chiec la thu phai/chieclathuphai.mp3'),
    pic: require('../assets/mtce24/66 chiec la thu phai/ductuan.jpg'),
    artist: 'Đức Tuấn'
  },
  {
    title: 'Xin Cho Tôi',
    pic: require('../assets/mtce24/68 xin cho toi/ductuan.jpg'),
    src: require('../assets/mtce24/68 xin cho toi/xinchotoi.mp3'),
    artist: 'Đức Tuấn'
  },
  {
    title: 'Mỗi Ngày Tôi Chọn Một Niềm Vui',
    pic: require('../assets/mtce24/70 moi ngay toi chon mot niem vui/ductuan.jpg'),
    src: require('../assets/mtce24/70 moi ngay toi chon mot niem vui/moingay.mp3'),
    artist: 'Đức Tuấn'
  },
  {
    title: 'Chiều Đông',
    src: require('../assets/mtce24/72 chieu dong/chieudong.mp3'),
    pic: require('../assets/mtce24/72 chieu dong/ductuanngocanh.png'),
    artist: 'Đức Tuấn and Ngọc Anh'
  },
  {
    artist: 'Lê Bích Trâm',
    title: 'MC',
    pic: require('../assets/mtce24/80 mc/mc.jpg'),
    src: require('../assets/mtce24/80 mc/mc.mp3')
  },
  {
    title: 'Không Thể và Có Thể',
    artist: 'Ngọc Anh',
    src: require('../assets/mtce24/82 khong the va co the/khongthe.mp3'),
    pic: require('../assets/mtce24/82 khong the va co the/ngocanh.jpg')
  },
  {
    title: 'Mùa Thu Dấu Em',
    artist: 'Ngọc Anh',
    src: require('../assets/mtce24/84 mua thu dau em/muathudauem.mp3'),
    pic: require('../assets/mtce24/84 mua thu dau em/ngocanh.jpg')
  },
  {
    title: 'Do That To Me One More Time',
    artist: 'Ngọc Anh',
    src: require('../assets/mtce24/86 do that to me one more time/dothattome.mp3'),
    pic: require('../assets/mtce24/86 do that to me one more time/ngocanh.jpg')
  },
  {
    artist: 'Lê Bích Trâm',
    title: 'MC',
    pic: require('../assets/mtce24/90 mc/mc.jpg'),
    src: require('../assets/mtce24/90 mc/mc.mp3')
  },
  {
    title: 'Instrumental',
    artist: 'The Upbeat Band',
    src: require('../assets/mtce24/92 upbeat band/upbeat2.mp3'),
    pic: require('../assets/mtce24/92 upbeat band/upbeatband.jpg')
  }
]
    }
  },
  data() {
    return {
      volume: 1,
      muted: false,
      music3: null,
      list3: []
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
