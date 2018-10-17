import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MusicPlayer from '@/components/MusicPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicPlayer',
      component: MusicPlayer
    }
  ]
})
