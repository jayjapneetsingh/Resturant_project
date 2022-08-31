import HomeView from './components/HomeView.vue'
import SignUp from './components/SignUp.vue'
import LoginView from './components/LoginView.vue'
import AddResturant from './components/AddRestuarant.vue'
import UpdateResturant from './components/UpdateResturant.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'HomeView',
        path:'/',
        component:HomeView
    },
    {
    name:'SignUp',
        path:'/signup',
        component:SignUp
    },

    {
        name:'LoginView',
        path:'/login',
        component:LoginView
    },
    {
        name:'AddResturant',
        path:'/add',
        component:AddResturant
    },
    {
        name:'UpdateResturant',
        path:'/update/:id',
        component:UpdateResturant
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
}) 

export default router