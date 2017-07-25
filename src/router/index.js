import Vue from 'vue'
import Router from 'vue-router'
import Projets from '@/pages/Projets'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projets',
      name: 'Projets',
      component: Projets,
      children: [
        {
          path: 'page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: 'page2',
          name: 'Page2',
          component: Page2
        }
      ]
    },
      { path: '/', redirect: '/page1' }
  ]
})
