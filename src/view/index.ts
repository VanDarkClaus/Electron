import {lazy} from 'react'
//这里为页面目录
const Login = lazy(()=>import('./login'))
const NotFound = lazy(()=>import('./notFound'))

export {
    Login,
    NotFound
}