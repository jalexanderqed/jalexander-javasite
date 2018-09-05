import React, {Component} from "react";
import Bio from './Bio';
import Projects from './Projects';

class MainMenu extends Component {
    render() {
        let menuBody;
        if (this.props.selected === "bioTabButton") {
            menuBody = <Bio/>;
        }
        else {
            menuBody = <Projects/>;
        }

        return (
            <div>
                <div id="mainMenu" className="main-menu">
                    <div
                        className={(this.props.selected === "bioTabButton" ? "selectedTabButton " : "") + "leftTabButton tabButton"}
                        id="bioTabButton"
                        onClick={this.props.on_menu_click}>
                        Bio
                    </div>
                    <div
                        className={(this.props.selected === "projectsTabButton" ? "selectedTabButton " : "") + "rightTabButton tabButton"}
                        id="projectsTabButton"
                        onClick={this.props.on_menu_click}>
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
}

export default MainMenu;