export default function(state = false, action) {
  switch (action.type) {
    case "OPEN_CART":
      return true;
    case "CLOSE_CART":
      return false;
    case "TOGGLE_CART":
      return !state;
    default:
      return state;
  }
}
