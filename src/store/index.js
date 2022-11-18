import { legacy_createStore as createStore } from "redux";

function reducer(state = { value: 0, step: 1, limit: Infinity }, action) {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        value:
          state.value + (state.step || 1) <= state.limit
            ? state.value + (state.step || 1)
            : state.value,
      };
    case "dec":
      return { ...state, value: state.value - (state.step || 1) };
    case "reset":
      return { value: 0, step: 1, limit: Infinity };
    case "changeSteps":
      return { ...state, step: action.payload };
    case "changeLimit":
      return { ...state, limit: action.payload };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
