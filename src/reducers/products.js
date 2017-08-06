const initialState = [
  {
    id: 1,
    title: "apple",
    image: "http://via.placeholder.com/100x100?text=apple",
    price: 0.25,
    quantity: 10
  },
  {
    id: 2,
    title: "orange",
    image: "http://via.placeholder.com/100x100?text=orange",
    price: 0.3,
    quantity: 10,
    discount: {
      discountedItem: 3,
      discountRate: 50
    }
  },
  {
    id: 3,
    title: "banana",
    image: "http://via.placeholder.com/100x100?text=banana",
    price: 0.15,
    quantity: 10
  },
  {
    id: 4,
    title: "papaya",
    image: "http://via.placeholder.com/100x100?text=papaya",
    price: 0.5,
    quantity: 10,
    discount: {
      discountedItem: 3,
      discountRate: 100
    }
  }
];

export default function(state = initialState, action) {
  const { payload: item, type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return [...state, item];
    case "REMOVE_PRODUCT":
      return state.filter(el => el.id !== item.id);
    case "ADD_TO_CART":
      return state.map(
        el => (el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el)
      );
    default:
      return state;
  }
}
