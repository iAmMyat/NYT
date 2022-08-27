import React, {Fragment,useState,useEffect} from 'react';
import {Form,Container,Row,Col} from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import '../Utility/css/app.css';
import {getDateFormat} from '../Utility/utility';
//import {getTranObject} from '../Utility/translate.js'; ***API KEY

function Header(props){

    const NewsList = useSelector((state)=>state.newsReducer);
    console.log("HEADER NewsList : ",NewsList, " length ", NewsList.length === 'undefined');
    const image = NewsList && NewsList.length !== 'undefined' ? NewsList.image.url: "";    
    let language = NewsList && NewsList.length !== 'undefined' ? NewsList.language == 'en-us' ? "ENG" : "ESP": "";
    
    const [isEng,setIsEng] = useState(true);

    const changeLanguage = (lan) =>{
        if(lan == "ENG"){
            setIsEng(true);
            if(language != "ENG"){
                language = "ENG";
            }
        }else{
            setIsEng(false);
            language = "ESP";
        }
    }
    
    return(
        <>
            <div style={{width:"100%",backgroundColor:"#DCDCDC"}}>
            <div className='stickyParent'>
                <div className="sticky">
                    <Container>
                    <Row>
                        <Col md={2}><p>{getDateFormat(NewsList.pubDate)}</p></Col>
                        <Col md={8}><div className='center'>{image != ""?
                            <div><a href={NewsList.link} target="_blank">
                            <img src={image} alt="NYT logo"/>
                        </a></div>
                        :""}</div></Col>                            
                        <Col md={2}>
                            <div className="right">
                                <span style={isEng ? {fontWeight:'bold'}:{fontWeight:'normal'}}><a href="#" onClick={() => changeLanguage("ENG")}>ENG</a></span>
                                <span>/</span>
                                <span style={!isEng ? {fontWeight:'bold'}:{fontWeight:'normal'}}><a href="#" onClick={() => changeLanguage("ESP")}>ESP</a></span>
                            </div>
                        </Col>
                        <hr/> 
                    </Row>
                    </Container>             
                </div>
            </div>
            </div>
            
        </>
    )
    
}

export default Header;