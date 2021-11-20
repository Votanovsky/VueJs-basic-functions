import Main from '@/pages/Main'
import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '@/pages/UserPage'
import AboutPage from '@/pages/AboutPage'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPage
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router