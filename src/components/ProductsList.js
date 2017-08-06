import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../actions";
import ProductsListItem from "./ProductsListItem";
import "./ProductsList.css";

const mapStateToProps = state => {
  return { products: state.products };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addToCart }, dispatch);

class ProductsList extends Component {
  render() {
    const { products, addToCart } = this.props;
    const listItems = products.map(item =>
      <ProductsListItem
        key={item.id}
        item={item}
        addToCart={() => {
          addToCart(item);
        }}
      />
    );

    return (
      <div className={"products-list list"}>
        {listItems}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
