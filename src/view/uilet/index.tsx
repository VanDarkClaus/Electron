import React from "react";
import { Route, Redirect,Switch } from 'react-router'
import {uiletRouter} from '../../router'
import DesktopLeft from "../../components/desktop-left";


interface Props {
  [a: string]: any;
}

const Index: React.SFC<Props> = props => {
  
  return (
    <DesktopLeft>
     <Switch>
       {uiletRouter.map(item =>{
         return <Route key={item.path} component={item.component} path={item.path}/>
       })}
       <Redirect from='/uilet' to='/uilet/getstart' exact/>
       <Redirect to='/404' />
     </Switch>
    </DesktopLeft>
  );
};

export default Index;
