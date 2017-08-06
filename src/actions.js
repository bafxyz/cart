// Products
export const addProduct = item => ({ type: "ADD_PRODUCT", payload: item });
export const removeProduct = item => ({
  type: "REMOVE_PRODUCT",
  payload: item
});

// Products with discount
export const addProductWithDiscount = item => ({
  type: "ADD_PRODUCT_WITH_DISCOUNT",
  payload: item
});
export const removeProductWithDiscount = item => ({
  type: "REMOVE_PRODUCT_WITH_DISCOUNT",
  payload: item
});

// Cart
export const toggleCart = () => ({ type: "TOGGLE_CART" });
export const openCart = () => ({ type: "OPEN_CART" });
export const closeCart = () => ({ type: "CLOSE_CART" });
export const addToCart = item => ({
  type: "ADD_TO_CART",
  payload: item
});
export const removeFromCart = item => ({
  type: "REMOVE_FROM_CART",
  payload: item
});

// Sidebar Nav
export const toggleSidebar = () => ({ type: "TOGGLE_SIDEBAR" });
export const openSidebar = () => ({ type: "OPEN_SIDEBAR" });
export const closeSidebar = () => ({ type: "CLOSE_SIDEBAR" });
