import React from "react";

const CartItem = props => {
  const { title, price, image, quantity } = props.item;

  return (
    <div className="listitem cart-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <div className="listtitle">
          {title}
        </div>
        <div className="cart-item-controls">
          <div className="cart-price">
            <div className="quantity">
              {quantity}
            </div>
            <div className="total">
              ${price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
