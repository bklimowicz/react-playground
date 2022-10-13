import React from "react";
import "./App.css";
import Card from "./components/card/card";
import Clock from "./components/tests/Clock";
import Toggle from "./components/tests/Toggle";

function App() {
    const data = [
        {
            productName: "Test Product",
            quantity: 2,
        },
        {
            productName: "Test Product2",
            quantity: 5,
        },
    ];

    return (
        <div className="container">
            {data.map((element) => {
                return (
                    <Card
                        productName={element.productName}
                        quantity={element.quantity}
                    ></Card>
                );
            })}
            <Clock />
            <Toggle />
        </div>
    );
}

export default App;
