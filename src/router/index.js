import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes'

export const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.use(VueRouter)