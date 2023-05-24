import counterReducer from "./counterReducer";

import { combineReducers,createStore, applyMiddleware} from "redux";
import todoReducer from "./todoReducer";
import productReducer from "./productReducer";
import countriesReducer from "./countriesReducer"
import thunk from 'redux-thunk'

var reducer=combineReducers({
    counter:counterReducer, 
    todolist:todoReducer, 
    products:productReducer,
    countries:countriesReducer
})
var store= new createStore(reducer,applyMiddleware(thunk))

export default store;