export default function(state = false, action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return true;
    case "CLOSE_SIDEBAR":
      console.info("here");
      return false;
    case "TOGGLE_SIDEBAR":
      return !state;
    default:
      return state;
  }
}
