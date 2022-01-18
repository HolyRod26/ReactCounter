import React from "react";
import Counter from "../Counter";
import Button from "../Button";
// on click will be a handleStart function for the button on timer

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 0,
      isCounting: false,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleIncrement() {
    this.setState((state) => ({ countdown: state.countdown + 1 }));
    // console.log(`countdown updated to: ${this.state.countdown}`);
  }
  handleDecrease() {
    this.setState((state) => ({ countdown: state.countdown - 1 }));
    // console.log(`countdown updated to: ${this.state.countdown}`);
  }
  handleStopGo() {
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }));
    if (this.state.isCounting) return this.MainMount();
    this.MainDismount();
  }

  tick() {
    this.setState((prevState) => ({
      countdown: prevState.countdown - 1,
    }));
  }

  MainMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  MainDismount() {
    clearInterval(this.timerID);
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
    const { countdown, isCounting } = this.state;
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
        <Button
          onClick={() => this.handleIncrement()}
          label="Aumentar"
          bgColor="#293473"
        />
        <Button
          onClick={() => this.handleDecrease()}
          label="Disminuir"
          bgColor="#293473"
        />
        <Button
          onClick={() => this.handleStopGo()}
          label={isCounting ? "go" : "stop"}
          bgColor="#445EF2"
        />
      </div>
    );
  }
}

export default Main;
