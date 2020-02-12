import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div style={{width:"100%",height:'100%',display:'flex'}}>
                 <nav>
                    <ul>
                        <li>
                        <Link to="/404">About</Link>
                        </li>
                        <li>
                        <Link to="/login">登录页</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
