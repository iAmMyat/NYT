import React from "react";
import './bootstrap.min.css';

import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/Home/HomeComponent";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

export default class AppComponent extends React.Component{
    
    render(){
        return(
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact render={()=> <Redirect to ="/home"/>}/>
                    <Route path="/home" exact component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}