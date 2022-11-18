import Button from "./Button";
import Header from "./Header";
import { connect } from "react-redux";
import Steps from "./Steps";

function App(props) {
  return (
    <>
      <Header />
      <main>
        <div className="counter">{props.value}</div>
        <Steps />
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
