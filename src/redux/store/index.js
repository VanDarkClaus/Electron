import { createStore, applyMiddleware, combineReducers } from 'redux'
import {loginReducers} from '../reducers/loginReducer'
import createSagaMiddleware from 'redux-saga'
import {mySaga} from '../../redux/action/saga'
import {composeWithDevTools} from 'redux-devtools-extension'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(combineReducers({
    loginReducers
}),composeWithDevTools(
    applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(mySaga)



