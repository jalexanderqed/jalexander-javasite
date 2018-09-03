import React, {Component} from "react";
import "../Main.css";

class TimePage extends Component {
    state = {
        time: ""
    };

    componentDidMount() {
        setInterval(this.fetch, 50);
    }

    fetch = () => {
        fetch('/api/str/time')
            .then(response => response.text())
            .then(message => {
                this.setState({time: message});
            });
    };

    render() {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <div>
                            {this.state.time}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TimePage;