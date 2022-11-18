import { connect } from "react-redux";
import { steps } from "../store/actions";

function Steps(props) {
  return (
    <div>
      <p className="label">Steps</p>
      <button
        className={`step-btn ${props.step === 5 && "active"}`}
        onClick={() => props.dispatch(steps(5))}
      >
        5
      </button>
      <button
        className={`step-btn ${props.step === 10 && "active"}`}
        onClick={() => props.dispatch(steps(10))}
      >
        10
      </button>
      <button
        className={`step-btn ${props.step === 15 && "active"}`}
        onClick={() => props.dispatch(steps(15))}
      >
        15
      </button>
    </div>
  );
}
function mapStatetoProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStatetoProps)(Steps);
