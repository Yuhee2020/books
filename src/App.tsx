import React from 'react';
import './App.scss';
import {AppHeader} from "./components/appHeader/AppHeader";
import {Routing} from "./components/rotes/Rotes";
import {FloatButton} from "antd";
import {RequestErrorHandler} from "./components/requestErrorHandler/requestErrorHandler";

function App() {
    return (
        <div className="App">
            <RequestErrorHandler/>
            <AppHeader/>
            <Routing/>
            <FloatButton.BackTop shape={"square"}/>
        </div>
    );
}

export default App;
