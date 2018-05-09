import Vue from 'vue'
import Router from 'vue-router'
const Hello = () => import('@/components/Hello');
const World = () => import('@/components/World');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      name: 'World',
      component: World,
    },
  ],
})
