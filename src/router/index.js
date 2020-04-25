import Vue from 'vue'
import Router from 'vue-router'
import BodyContent from '@/components/BodyContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BodyContent',
      component: BodyContent
    }
  ]
})
