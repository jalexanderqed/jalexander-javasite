import React from 'react';
import CreateReactClass from "create-react-class";
import Bio from './Bio';
import Projects from './Projects';

var MainMenu = CreateReactClass({
    getInitialState: function () {
        return {numTabs: 2, selected: "bioTabButton"};
    },
    handleClick: function (event) {
        if (event.target.classList.contains("tabButton")) {
            if (!event.target.classList.contains("selectedTabButton")) {
                let newSelected = this.state.selected === "bioTabButton" ? "projectsTabButton" : "bioTabButton";
                this.setState({selected: newSelected});
            }
        }
    },
    render: function () {
        let specialStyle = {
            width: "50%"
        }

        let menuStyle = {
            overflow: "hidden",
            display: "flex"
        }

        var menuBody;
        if (this.state.selected === "bioTabButton") {
            menuBody = <Bio />;
        }
        else {
            menuBody = <Projects />;
        }

        return (
            <div>
                <div id="mainMenu" style={menuStyle}>
                    <div
                        className={(this.state.selected === "bioTabButton" ? "selectedTabButton " : "") + "leftTabButton tabButton"}
                        id="bioTabButton"
                        style={specialStyle}
                        onClick={this.handleClick}>
                        Bio
                    </div>
                    <div
                        className={(this.state.selected === "projectsTabButton" ? "selectedTabButton " : "") + "rightTabButton tabButton"}
                        id="projectsTabButton"
                        style={specialStyle}
                        onClick={this.handleClick}>
                        Projects
                    </div>
                </div>
                <br/>
                <div id="descriptionContainer">
                    {menuBody}
                </div>
            </div>
        );
    }
});

export default MainMenu;