import React from 'react';
import CreateReactClass from "create-react-class";
import MainTitle from './MainTitle';
import MainMenu from './MainMenu';

var Portfolio = CreateReactClass({
    render: function () {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <MainTitle />
                        <MainMenu type="bio" />
                    </div>
                </div>
            </div>
        );
    }
});

export default Portfolio;