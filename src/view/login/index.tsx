import React, { Component } from 'react'
import {connect} from 'react-redux'

const  mapStateToProps = (state:any) => {
    return {
       state:state
    }
}
interface Props{
    [a:string]:any
}
@connect(mapStateToProps)
export default class index extends Component<Props> {
    componentDidMount(){
        console.log(this)
    }
    render() {
        return (
            <div>
                这是登录页面登录
            </div>
        )
    }
}
