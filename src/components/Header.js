import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleSidebar, toggleCart } from "../actions";
import logo from "../assets/logo.svg";
import "./Header.css";

const mapStateToProps = state => {
  return {
    isSidebarVisible: state.sidebarVisibility,
    isCartVisibile: state.cartVisibility
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar, toggleCart }, dispatch);

class Header extends Component {
  render() {
    let {
      toggleSidebar,
      toggleCart,
      isSidebarVisible,
      isCartVisibile
    } = this.props;

    return (
      <div className="doc-header">
        <section className="column -first">
          <button className="header-button" onClick={toggleSidebar}>
            <i
              className={
                "fa fa-lg" + (isSidebarVisible ? " fa-times" : " fa-bars")
              }
            />
          </button>
        </section>
        <section className="column -middle">
          <img className="header-logo" src={logo} alt="logo" />
        </section>
        <section className="column -last">
          <button className="header-button" onClick={toggleCart}>
            <i
              className={
                "fa fa-lg" +
                (isCartVisibile ? " fa-times" : " fa-shopping-cart")
              }
            />
          </button>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
