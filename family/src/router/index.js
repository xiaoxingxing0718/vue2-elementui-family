import Vue from 'vue'
import Router from 'vue-router'
import headTop from '@/components/headTop'
import manage from '@/page/manage'
import login from '@/page/login'
import fundlist from '@/page/fundData/fundlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      name: 'manage',
      children: [
        {
          path: '',
          component: headTop,
          meta: []
        },
        {
          name: 'fundlist',
          path: 'fundlist',
          component: fundlist,
          meta: ['资金管理', '日常账单']
        }

      ]
    }
  ]
})
