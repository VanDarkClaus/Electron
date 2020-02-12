import {
    Login,
    NotFound
} from '../view'

//第一个主路由,
export const mainRouter = [
    {
        path:'/login',
        component: Login,
        exact:false
    }, {
        path:'/404',
        component: NotFound,
        exact:false
    }
]

//登录后的路由
export const adminRouter = [
    {}
]