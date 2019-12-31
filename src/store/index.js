import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {familyReducer} from "../family/family-reducer";

const rootReducer = combineReducers({
   familyReducer: familyReducer
});

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger];

const store = createStore(rootReducer, withDevTools(applyMiddleware(...middleware)));

export default store;
