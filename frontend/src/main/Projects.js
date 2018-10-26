import React, {Component} from "react";

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="projectsElement">
                    Android application that tags faces with age, gender, expression, and more:&nbsp;
                    <a target="_blank" rel="noopener noreferrer"
                       href="https://github.com/jalexanderqed/MicrosoftCognitiveFrontend_android">
                        GitHub
                    </a>
                </div>
                <br/>
                <div className="projectsElement">
                    Corresponding server that receives a picture and sends it to the Microsoft Cognitive Services
                    API:&nbsp;
                    <a target="_blank" rel="noopener noreferrer"
                       href="https://github.com/jalexanderqed/msft-cognitive-server">
                        GitHub
                    </a>
                </div>
                <br/>
                <div className="projectsElement">
                    Finding this page with Google:<br/>turnswaddle fiddlydee
                </div>
            </div>
        );
    }
}

export default Projects;