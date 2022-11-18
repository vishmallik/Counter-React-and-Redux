import { connect } from "react-redux";
import { limit } from "../store/actions";

function Limit(props) {
  return (
    <div>
      <p class="label">Max</p>
      <button
        class={`limit-btn ${props.limit === 15 && "active-limit"}`}
        onClick={() => props.dispatch(limit(15))}
      >
        15
      </button>
      <button
        class={`limit-btn ${props.limit === 100 && "active-limit"}`}
        onClick={() => props.dispatch(limit(100))}
      >
        100
      </button>
      <button
        class={`limit-btn ${props.limit === 200 && "active-limit"}`}
        onClick={() => props.dispatch(limit(200))}
      >
        200
      </button>
    </div>
  );
}
function mapStatetoProps(state) {
  return {
    limit: state.limit,
  };
}

export default connect(mapStatetoProps)(Limit);
