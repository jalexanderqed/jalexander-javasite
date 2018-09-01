import React from 'react';
import CreateReactClass from "create-react-class";

var Bio = CreateReactClass({
    render: function () {
        return (
            <div>
                <div className="bioElement">
                    <img id="profilePic" src="img/Me.jpg" align="left" alt="Jack Alexander"/>
                    My GitHub: <a target="_blank" rel="noopener noreferrer" href="https://github.com/jalexanderqed">jalexanderqed</a>
                </div>
            </div>
        );
    }
});

export default Bio;