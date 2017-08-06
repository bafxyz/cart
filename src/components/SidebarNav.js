import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeSidebar } from "../actions";
import "./SidebarNav.css";

const mapStateToProps = state => {
  return { isSidebarVisibile: state.sidebarVisibility };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeSidebar }, dispatch);

class SidebarNav extends Component {
  render() {
    let { closeSidebar, isSidebarVisibile } = this.props;

    return (
      <aside className={"sidebar-nav" + (isSidebarVisibile ? " -visible" : "")}>
        <div className="fa fa-lg fa-times hide" onClick={closeSidebar} />
        <ul className="content">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </aside>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);
