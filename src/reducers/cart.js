// cart: [
//   {
//     id: 1,
//     title: 'Banana'
//     image: 'lorempixel'
//     quantity: 1
//     price : 3
//   }
// ]

/**
 * Adds product to cart.
 *
 * @param      {Array}   state   The cart state
 * @param      {Object}  item    The product item
 * @return     {Array}   new cart state
 */
const addToCart = (state, item) => {
  return [
    ...state,
    {
      id: item.id,
      title: item.title,
      quantity: 1,
      image: item.image,
      price: item.price
    }
  ];
};

/**
 * Gets the discount for given product.
 *
 * @param      {number}  quantity        The quantity
 * @param      {number}  price           The price
 * @param      {number}  discountedItem  The discounted item
 * @param      {number}  discountRate    The discount rate
 * @return     {number}  The discount.
 */
const getDiscount = (quantity, price, discountedItem, discountRate) => {
  const multiply = Math.trunc(quantity / discountedItem);
  const discountPrice = discountRate * price / 100;

  return price * quantity - discountPrice * multiply;
};

/**
 * Changes product amount and price.
 *
 * @param      {Object}  item    The product item
 * @param      {Object}  el      Iterated item object
 * @return     {Array}   new cart state
 */
const changeProductState = (el, item) => {
  let quantity = el.quantity + 1;
  const { price, discount } = item;
  let totalPrice = price * quantity;

  if (discount) {
    const { discountedItem, discountRate } = discount;

    if (quantity >= discountedItem) {
      totalPrice = getDiscount(quantity, price, discountedItem, discountRate);
    }
  }
  return { ...el, quantity, price: totalPrice };
};

export default function(state = [], action) {
  const { payload: item, type } = action;

  switch (type) {
    case "ADD_TO_CART":
      if (!state.find(el => el.id === item.id)) {
        return addToCart(state, item);
      } else {
        return state.map(
          el => (el.id === item.id ? changeProductState(el, item) : el)
        );
      }
    case "REMOVE_FROM_CART":
      return state.map(
        el => (el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el)
      );
    default:
      return state;
  }
}
