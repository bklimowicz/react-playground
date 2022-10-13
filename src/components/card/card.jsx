import React from "react";
import "./card.scss";

const Card = (props) => {
    const { productName, quantity } = props;

    return (
        <div className="card-container">
            <h1>{productName}</h1>
            <h2>{quantity}</h2>
        </div>
    );
};

export default Card;
