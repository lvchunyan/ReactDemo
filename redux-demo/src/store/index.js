import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

//增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

//createStore只接收两个参数
const store = createStore(
    reducer,
    enhancer
)
export default store