import React from "react";
import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Cart from "./Cart";
import Content from "./Content";

const Layout = () => {
  return (
    <div className="doc-layout">
      <SidebarNav />
      <Header />
      <Cart />
      <Content />
    </div>
  );
};
export default Layout;
