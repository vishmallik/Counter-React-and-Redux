import Button from "./Button";
import Header from "./Header";
import { connect } from "react-redux";
import Steps from "./Steps";
import Limit from "./Limit";

function App(props) {
  return (
    <>
      <Header />
      <main>
        <div className="counter">{props.value}</div>
        <div class="flex wrapper wrap">
          <Steps />
          <Limit />
        </div>
        <Button />
      </main>
    </>
  );
}

function mapStatetoProps(state) {
  return {
    value: state.value,
  };
}
export default connect(mapStatetoProps)(App);
