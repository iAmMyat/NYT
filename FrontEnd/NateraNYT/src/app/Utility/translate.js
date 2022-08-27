import React from "react";
import translate from 'google-translate-api';
import TJO from 'translate-json-object';
import {NewsToStore} from "../State/News/NewsAction";

export const getTran = (text,to) =>{    
    translate(text, {to: to}).then(res => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
    }).catch(err => {
        console.error(err);
    });
}

TJO.init({
    googleApiKey: ""//*****/
  });
export const getTranObject = (tranObj,to)=>{
    TJO.translate(tranObj, to)
    .then(data => console.log("translate ",data))
    .catch(err => console.error(err));
}