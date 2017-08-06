import React from "react";

const ProductListItem = props => {
  const { item, addToCart } = props;
  const { title, price, image, quantity } = item;

  return (
    <div className="listitem products-list-item">
      <div className="column -first">
        <img className="image" src={image} alt={title} />
      </div>
      <div className="column">
        <div className="listtitle">
          {title}
        </div>
      </div>
      <div className="column">
        <div className="price">
          price: {price}$
        </div>
      </div>
      <div className="column">
        {quantity > 0
          ? <div className="quantity">
              {quantity}
            </div>
          : <div>Not in stock</div>}
      </div>
      <div className="column -last">
        <button
          className="fa fa-cart-plus"
          onClick={() => {
            addToCart();
          }}
          disabled={quantity === 0 ? "disabled" : ""}
        />
      </div>
    </div>
  );
};

export default ProductListItem;
