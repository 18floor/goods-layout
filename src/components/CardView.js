import React from "react";
import nextId from "react-id-generator";
import ShopCard from "./ShopCard";

const CardsView = ({cards}) => {
    return (
        <div className="cards">
            {cards.map((card) => (
                <ShopCard key={nextId()} price={card.price} color={card.color} name={card.name} img={card.img}/>
            ))}
        </div>
    );
}

export default CardsView;