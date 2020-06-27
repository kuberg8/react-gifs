import {applyMiddleware, combineReducers, createStore, compose} from "redux";

import gifReducer from "./gif-reducer.js"

import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
	gif: gifReducer,
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


//let store = createStore(reducers, applyMiddleware(thunkMiddleware));   - как было до использования хрумовского Redux DevTools
//window.store = store;  - не нужен так как можно посмотреть данные State в Redux DevTools

export default store;