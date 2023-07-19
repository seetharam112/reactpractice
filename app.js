import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div', { id: "parent", className: "parent" }, [
    React.createElement('div', { id: "child", className: "child" }, [
        React.createElement('h1', { id: "", className: "" }, "Welcome to surya's kitchen"),
        React.createElement('h1', { id: "", className: "" }, "You can find nice recipes")
    ]),
    React.createElement('div', { id: "child", className: "child" }, [
        React.createElement('h1', { id: "", className: "" }, "Welcome to surya's kitchen"),
        React.createElement('h1', { id: "", className: "" }, "You can find nice recipes")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)