import React,{Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {mainRouter} from './routes'
import {Provider} from 'react-redux'
import {store} from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
      <Router>
          <Switch>
            {
              mainRouter.map(item =>{
                return <Route path={item.path} component={item.component} key={item.path} exact={item.exact}/>
              })
            }
            <Redirect from='/'  to='/login' exact></Redirect>
            <Redirect to='/404'/>
          </Switch>
      </Router>
      </Suspense>
    </Provider>
  );
}
