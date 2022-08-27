import * as ActionTypes from "../actionTypes";
import NYTServices from "../../Services/NYTServices";

export const fetchNews = () =>{
    console.log("Get All News...");
    return function(dispatch){
        NYTServices.getAllNews()
        .then(response =>{
            console.log("response ",response);
            return response.data;
        })
        .then((response)=>{
            console.log("NEWS Response ",response);
            dispatch(NewsToStore(response));
        })
        .catch((err)=>{
            // if(err.response.status == "401")
            //     return err.response.data;
            console.log("Error while fetching News ",err);
        })
    }
}

export const NewsToStore = (news) =>({
    type : ActionTypes.AddNewsToStore,
    payload : {news}
});

export const emptyNews = () => ({
    type : ActionTypes.EMPTY_NEWS,
    payload : {}
});