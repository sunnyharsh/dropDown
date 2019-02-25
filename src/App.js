import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comp1 from "./components/component1";
import Header from "./components/header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                "sunny",
                "raushan",
                "rupa",
                "chanda",
                "harsh",
                "amit",
                "rohan",
                "akash",
                "bhushan",
                "bharat",
                "abhnuv",
                "shruti",
                "laxmi",
                "sohan",
                "anand",
                "venki",
                "rahul",
                "priyanka",
                "khushboo",
                "shilpi",
                "anjli",
                "priya"
            ]
        };
    }
    render() {
        const { items } = this.state;
        return (
            <div className="App">
                <Header headng="DropDown" />
                <Comp1 text="Dynamic text" items={items} />
            </div>
        );
    }
}

export default App;
