console.log("We are able to setup successfully from console!")

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import AppComponent from "./app/app";
import Store from "./app/State/store";

render(
    <Provider store={Store}>
        <AppComponent/>
    </Provider>
    ,
    document.getElementById("root")
)
