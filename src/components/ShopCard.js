import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

const ShopCard = ({name, price, color, img}) => {
    return (
      <div className="card">
          <img className="card-img" src={img} alt={name}/>
          <div className="card-name">{name}</div>
          <div className="card-color">{color}</div>
          <div className="card-price">{price}</div>
          <div className="card-add-to-cart">Add to card</div>
      </div>
    );
}

ShopCard.propTypes = propTypes;
export default ShopCard;