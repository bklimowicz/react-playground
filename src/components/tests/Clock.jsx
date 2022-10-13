import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h1>Witaj, świecie!</h1>
                <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
