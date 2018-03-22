import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import Perf from 'react-addons-perf'
import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'

const win = window
win.Perf = Perf

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

const store = createStore(reducer)

export default store
