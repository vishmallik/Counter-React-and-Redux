import { connect } from "react-redux";
import { decrement, increment, reset } from "../store/actions";

function Button(props) {
  return (
    <>
      <button className="btn inc" onClick={() => props.dispatch(increment())}>
        Increment
      </button>
      <button className="btn dec" onClick={() => props.dispatch(decrement())}>
        Decrement
      </button>
      <button className="btn reset" onClick={() => props.dispatch(reset())}>
        Reset
      </button>
    </>
  );
}
export default connect()(Button);
