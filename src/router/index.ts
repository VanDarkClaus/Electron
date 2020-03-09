import {
    Login,
    NotFound,
    Uilet
} from '../view'

//第一个主路由,
export const mainRouter = [
    {
        path:'/login',
        component: Login
    }, {
        path:'/404',
        component: NotFound
    }, {
        path:'/uilet',
        component: Uilet,
    }
]

//登录后的路由
export const adminRouter = [
    {
        path:'/login/uilet',
        component: Uilet,
    }
]