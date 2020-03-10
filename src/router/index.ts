import {
    Login,
    NotFound,
    Uilet,
    Assembly,
    GetStart
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

//uilet下的的路由
export const uiletRouter = [
    {
        path:'/uilet/getstart',
        component: GetStart,
    }, {
        path:'/uilet/assembly',
        component: Assembly,
    },
]