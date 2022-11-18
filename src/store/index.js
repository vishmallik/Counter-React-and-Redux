import { legacy_createStore as createStore } from "redux";

function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "inc":
      return { value: state.value + 1 };
    case "dec":
      return { value: state.value - 1 };
    case "reset":
      return { value: 0 };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
