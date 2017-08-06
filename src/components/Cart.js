import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import "./Cart.css";

const mapStateToProps = state => {
  const { cartVisibility, cart } = state;

  return {
    cartVisibility,
    cart
  };
};

class Cart extends Component {
  applyDiscount() {}

  render() {
    let { cartVisibility: isCartVisibile, cart: cartItems } = this.props;

    const listItems = cartItems.map(item =>
      <CartItem key={item.id} item={item} />
    );

    const markup = cartItems.length
      ? <div className="list">
          {listItems}
        </div>
      : <div>Cart is empty</div>;

    return (
      <div className={"cart" + (isCartVisibile ? " -visible" : "")}>
        {markup}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);
