import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Grid from '@/components/Grid'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ],
  history: false
})
