import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {mainRouter} from './router'
import {Provider} from 'react-redux'
import {store} from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <Router>
          <Switch>
            {
              mainRouter.map(item =>{
                return <Route path={item.path} component={item.component} key={item.path}/>
              })
            }
            <Redirect from='/'  to='/login' exact></Redirect>
            <Redirect to='/404'/>
          </Switch>
      </Router>
      {/* </Suspense> */}
    </Provider>
  );
}
