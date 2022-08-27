import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {getItemDate} from '../../Utility/utility';
import "../../Utility/css/app.css";
let NewList = ((news) =>{
    news = news.news;
    console.log("news =>  ",news);
    return(
        <div key={news.link}>
            <a href={news.link} target="_blank">
                <div id="item-container">
                    <div className="leftItem">
                        <p className="small">{getItemDate(news.pubDate)}</p>
                        <h6>{news.title}</h6>
                        <p className="des">{news.mediaDescription} {news.description}</p>
                        <div className="smallFont">BY {news.author}</div>
                    </div>
                    
                    <div className="rightItem">
                        <img src={news.image.url} alt="Media Image"/>
                    </div>
                
                </div>
            </a>
        </div>
    )
})

export default NewList;