import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import details from '@/components/details'
import template from '@/components/template'
import diagram from '@/components/diagram'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/details',
      component: details
    },
    {
      path: '/in_theaters',
      component: template
    },
    {
      path: '/coming_soon',
      component: template
    },
    {
      path: '/top250',
      component: template
    },
    {
      path: '/search',
      component: template
    },
    {
      path: '/diagram',
      component: diagram
    }
  ]
})
