import Button from "./Button";
import Header from "./Header";
import { connect } from "react-redux";

function App(props) {
  return (
    <>
      <Header />
      <main>
        <div className="counter">{props.value}</div>
        <Button name="Increment" type="inc" />
        <Button name="Decrement" type="dec" />
        <Button name="Reset" type="reset" />
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
