import { createStore,combineReducers, applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import newsReducer from "./News/NewsReducer";

let logger = () => (next) => (action) =>{
    console.log("Logged Action : Store File ",action);
    next(action);
};

export default createStore(
    combineReducers({
        newsReducer
    }),
    {},
    applyMiddleware(logger, thunk,promise)
)