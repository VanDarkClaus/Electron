import React, { useState } from 'react'
import { Route, Redirect,Switch, RouteComponentProps, withRouter } from 'react-router'
import {adminRouter} from '../../router'
import DesktopLeft from '../../components/desktop-left'
import { Paper, Box, Typography } from "@material-ui/core";
import useStyle from './login.jss'
import moment from 'moment'
// import './login.css'

interface Props{
    [a:string]:any
}


const  Index:React.SFC<Props> = (props) =>  {
    const classes = useStyle()
   const [time, setTime] = useState(new Date())
   const nowTime = setInterval(()=>{
            setTime(new Date())
        },1000)
   const [isLogin, setIslogin] = React.useState(()=>{
        if(localStorage.getItem('isLogin')){
            let {isLogin} = JSON.parse(localStorage.getItem('isLogin') as string)
            return isLogin
        }else{
            return false
        }
   })
    const login = () =>{
         localStorage.setItem('isLogin',JSON.stringify({isLogin:true}))
         setIslogin(true)
    }
    const week = () =>{
        switch(moment(time).format('E')){
            case '1': return '星期一';
            case '2': return '星期二';
            case '3': return '星期三';
            case '4': return '星期四';
            case '5': return '星期五';
            case '6': return '星期六';
            default: return '星期天'
        }
    }
    const goPage = (path:string) =>{
        // setRoute(path)
        props.history.push(path)
    }
        return (
            <Paper className={classes.root}>
                {
                    isLogin?
                    props.history.push('/uilet')
                    // <DesktopLeft>
                    //     <Switch>
                    //         {
                    //             adminRouter.map(item =>{
                    //                 return <Route key={item.path} path={item.path} component={item.component}/>
                    //             })
                    //         }
                    //         <Redirect from='/login' to='/login/uilet' exact/>
                    //         <Redirect to='/404'/>
                    //     </Switch>
                    //  </DesktopLeft> 
                    :
                    <Box className={classes.login}>
                        <Box className={classes.loginTop} >
                            <Box className={classes.topRight}>
                                <img className={classes.sunImg} src={require("../../images/login/h_weather.jpg")}  alt="sun" />
                                <span className={classes.loginYear}>{moment(time).format('YYYY-MM-DD')}</span>
                                <span className={classes.loginWeek}>{week()}</span>
                                <span className={classes.loginDay}>{moment(time).format('hh:ss')}</span>
                            </Box>
                        </Box>
                        <Box className={classes.loginMain}>
                                <img className={classes.headerImg} src={require("../../images/login/bg.jpg")}  alt="headerImg" />
                                <input className={classes.loginInput} placeholder='用户名'></input>
                                <input className={classes.loginInput} placeholder='输入密码'></input>
                                <div onClick={login}>
                                    <img className={classes.loginClick} src={require("../../images/login/h_login.jpg")}  alt="headerImg" />
                                </div>
                        </Box>
                        <Box className={classes.loginBottom}>
                            <Box style={{display:'flex',alignItems:'center'}}> 
                                <img style={{width:'36px',height:'36px'}} src={require('../../images/login/UK.jpg')} alt='uk'></img>
                                <div className={classes.loginBottomUK}>UK登录</div>
                            </Box>
                            <Box style={{display:'flex',alignItems:'center'}}> 
                                <img style={{width:'36px',height:'36px'}} src={require('../../images/login/h_facerecognition.jpg')} alt='uk'></img>
                                <div className={classes.loginBottomUK}>人脸识别</div>
                            </Box>
                            <Box style={{display:'flex',alignItems:'center'}}> 
                                <img style={{width:'36px',height:'36px'}} src={require('../../images/login/h_fingerprint.jpg')} alt='uk'></img>
                                <div className={classes.loginBottomUK}>指纹识别</div>
                            </Box>
                        </Box>
                    </Box>
                }
            </Paper>
        )
}

export default Index
