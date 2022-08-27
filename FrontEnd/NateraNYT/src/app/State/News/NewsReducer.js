import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = "";

export default function NewsReducer(state= INITIAL_STATE,action){
    console.log("News Reducer",state,action);

    switch(action.type){
        case ActionTypes.AddNewsToStore:
            return action.payload.news;
        
        case ActionTypes.EMPTY_NEWS:
            return "";
        
        default:
            return state;
    }
}