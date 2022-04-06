import React from "react";
import nextId from "react-id-generator";
import ShopItem from "./ShopItem";

const ListView = ({cards}) => {
    return (
        <div>
            {cards.map((card) => (
                <ShopItem key={nextId()} price={card.price} color={card.color} name={card.name} img={card.img}/>
            ))}
        </div>
    );
}

export default ListView;