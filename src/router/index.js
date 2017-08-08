import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Projets from '@/pages/Projets'
import LearnEat from '@/pages/LearnEat'
import PFCG from '@/pages/PFCG'
import IkMusic from '@/pages/IkMusic'
import Royco from '@/pages/Royco'
import Moi from '@/pages/Moi'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets,
      children: [
        {
          path: 'learn-eat',
          name: 'learn',
          component: LearnEat
        },
        {
          path: 'paris-foot-golf-club',
          name: 'PFCG',
          component: PFCG
        },
        {
          path: 'ik-music-production',
          name: 'IkMusic',
          component: IkMusic
        },
        {
          path: 'les-legumes-de-cedric',
          name: 'Royco',
          component: Royco
        }
      ]
    },
    { path: '/mon-cv', component: Moi }
  ]
})
