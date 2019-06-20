import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode:'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            redirect:'/vant'
        },
        {
            path: '/vant',
            name: 'vant',
            component: () => import('./views/Vant.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('./views/Test.vue')
        }
    ]
})
