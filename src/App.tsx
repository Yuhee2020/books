import React from 'react';
import './App.scss';
import {AppHeader} from "./components/appHeader/AppHeader";
import {Routing} from "./components/rotes/Rotes";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <Routing/>
        </div>
    );
}

export default App;
