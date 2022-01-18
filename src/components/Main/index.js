import React from "react";
import Counter from "../Counter";
// on click will be a handleStart function for the button on timer

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleIncrement() {
    this.setState((state) => ({ counter: state.counter + 1 }));
    console.log(`counter updated to: ${this.state.counter}`);
  }
  handleDecrease() {
    this.setState((state) => ({ counter: state.counter - 1 }));
    console.log(`counter updated to: ${this.state.counter}`);
  }
  handleStart() {
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }));
  }
  /*
  constructor(props) {
    super(props);
    this.state = {
      countdown: 0,
    };
  }

  MainMount() {}

  MainDismount() {}
  <p>{countdown}</p>
*/
  render() {
    const { countdown } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Counter countdown={countdown} />
      </div>
    );
  }
}

export default Main;
