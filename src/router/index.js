import Vue from 'vue'
import Router from 'vue-router'
import Projets from '@/pages/Projets'
import LearnEat from '@/pages/LearnEat'
import PFCG from '@/pages/PFCG'
import IkMusic from '@/pages/IkMusic'
import Royco from '@/pages/Royco'

Vue.use(Router)

export default new Router({
  routes: [
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
          path: 'pfgc',
          name: 'PFCG',
          component: PFCG
        },
        {
          path: 'ik-music',
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
      { path: '/', redirect: '/projets/learn-eat' }
  ]
})
