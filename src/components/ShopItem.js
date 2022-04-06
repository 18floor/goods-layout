import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

const ShopItem = ({name, price, color, img}) => {
    return (
        <div className="item">
            <div className="item-img">
                <img className="item-img-pic" src={img} alt={name}/>
            </div>
            <div className="item-name">{name}</div>
            <div className="item-color">{color}</div>
            <div className="item-price">{price}</div>
            <div className="item-add-to-cart">Add to card</div>
        </div>
    );
}

ShopItem.propTypes = propTypes;
export default ShopItem;