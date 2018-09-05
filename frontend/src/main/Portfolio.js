import React, {Component} from "react";
import "../Main.css";
import "./Portfolio.css";
import MainTitle from './MainTitle';
import MainMenu from './MainMenu';

class Portfolio extends Component {
    state = {selected: "bioTabButton"};

    constructor(props) {
        super(props)

        // Bind the this context to the menuClickHandler function
        this.menuClickHandler = this.menuClickHandler.bind(this);
    }

    menuClickHandler(event) {
        console.log(event.target.classList);
        if (event.target.classList.contains("tabButton") && !event.target.classList.contains("selectedTabButton")) {
            let newSelected = this.state.selected === "bioTabButton" ? "projectsTabButton" : "bioTabButton";
            this.setState({selected: newSelected});
        }
    }

    render() {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <MainTitle/>
                        <MainMenu selected={this.state.selected} on_menu_click={this.menuClickHandler}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;