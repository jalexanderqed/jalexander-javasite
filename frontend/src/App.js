import React, {Component} from "react";
import "./App.css";
import TimePage from "./time/TimePage";
import Portfolio from "./main/Portfolio";

class App extends Component {

    lengths = [
        4,
        4,
    ];
    
    strings = [
        "main",
        "time",
    ];

    pages = [
        "Portfolio",
        "Time",
    ];

    state = {
        keystrokes: "",
        page: "Portfolio"
    };

    componentWillMount() {
        window.addEventListener("keydown", this.handleKeyboardInput.bind(this));
    }

    handleKeyboardInput = (e) => {
        let str = this.state.keystrokes.concat(e.key);
        let page = this.state.page;

        for(let i = 0; i < this.lengths.length; i++){
            if(str.substring(str.length - this.lengths[i]) === this.strings[i]){
                str = "";
                page = this.pages[i];
                break;
            }
        }

        this.setState({
            keystrokes: str,
            page: page
        });
    }

    render() {
        switch (this.state.page) {
            case "Time":
                return (<TimePage/>);
            default:
                return (<Portfolio/>);
        }
    }
}

export default App;
