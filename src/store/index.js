import { legacy_createStore as createStore } from "redux";

function reducer(state = { value: 0, step: 1 }, action) {
  switch (action.type) {
    case "inc":
      return { ...state, value: state.value + (state.step || 1) };
    case "dec":
      return { ...state, value: state.value - (state.step || 1) };
    case "reset":
      return { ...state, value: 0 };
    case "changeSteps":
      console.log(1);
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
