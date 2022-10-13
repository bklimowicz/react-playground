import React, { Component } from "react";
import "@microsoft/signalr";

const signalR = require("@microsoft/signalr");

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.gatewayConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7183/gatewayHub")
            .build();

        this.gatewayConnection.start();

        this.handleClick = this.handleClick.bind(this);
        this.start = this.start.bind(this);
    }

    handleClick() {
        this.gatewayConnection.invoke("SendData", "Some data, hello!");
    }

    async start(gatewayConnection) {
        await gatewayConnection.start();
        console.log("Hub has connected");

        gatewayConnection.onclose(async () => {
            console.log("Hub has disconnected");
        });
    }

    render() {
        return <button onClick={this.handleClick}>Send Data</button>;
    }
}

export default Toggle;
