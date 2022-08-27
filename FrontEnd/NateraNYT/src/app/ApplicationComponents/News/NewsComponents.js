import React,{useState,useEffect,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { fetchNews } from "../../State/News/NewsAction";
import NewList from "./NewList";
import "../../Utility/css/app.css"

let NewsComponent = (props) =>{
    const NewsList = useSelector((state)=>state.newsReducer);
    let item = NewsList != "" ? NewsList.item : "";
    const Item = [...item].sort(
        (objA,objB) => Number(new Date(objA.pubDate))-Number(new Date(objB.pubDate))
    );
    const fetchNewsDispatch = useDispatch();
    useEffect(() =>{
        fetchNewsDispatch(fetchNews());
        console.log("FETCH NEWS => ",NewsList);
    },[]);

    return(
        <div className="homeBackgournd">
            <Container>
                <Form className="body">
                    <Row>
                        <Col>
                            <div style={{marginTop:"10%"}}></div>
                            <div>
                                {Item != ""? 
                                    Item.map((item,ndx)=>{
                                        const isLast = Item.length - 1 === ndx;
                                        return <div className="content"><NewList news={item} key={item.link}/>{!isLast && <hr />}</div>
                                    })
                                : "test"}
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default NewsComponent;