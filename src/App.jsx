import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Restaurents from "./components/restaurentCards/Restaurents"

const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Restaurents/>
        </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)