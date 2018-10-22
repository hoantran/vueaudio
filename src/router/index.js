import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MusicPlayer from '@/components/MusicPlayer'
import NotFound from '@/components/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MusicPlayer',
      component: MusicPlayer
    },
    {
      path: '*',
      name: 'Page404',
      component: NotFound
    }
  ]
})
