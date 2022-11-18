import { connect } from "react-redux";
import { decrement, increment, reset } from "../store/actions";

function Button(props) {
  return (
    <button
      className={`btn ${props.type}`}
      onClick={() => props.dispatch(resolveName(props.name))}
    >
      {props.name}
    </button>
  );
}
function resolveName(name) {
  switch (name) {
    case "Increment":
      return increment();
    case "Decrement":
      return decrement();
    case "Reset":
      return reset();
    default:
      reset();
  }
}
export default connect()(Button);
