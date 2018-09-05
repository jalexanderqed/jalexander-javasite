import React, {Component} from "react";

class Bio extends Component {
    render() {
        return (
            <div>
                <div className="bioElement">
                    <img id="profilePic" src="img/Me.jpg" align="left" alt="Jack Alexander"/>
                    My GitHub: <a target="_blank" rel="noopener noreferrer"
                                  href="https://github.com/jalexanderqed">jalexanderqed</a>
                </div>
            </div>
        );
    }
}

export default Bio;