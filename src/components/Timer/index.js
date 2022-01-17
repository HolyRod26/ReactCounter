import React from "react";
import OptionsCounter from "../OptionsCounter";
// on click will be a handleStart function for the button on timer

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 0,
    };
  }

  TimerMount() {}

  TimerDismount() {}

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
          fontFamily: "Chakra Petch",
          fontSize: "4rem",
          boxShadow: "3 3 6 1 rgba(162,255,23,0.6)",
        }}
      >
        <p>{countdown}</p>
        <OptionsCounter />
      </div>
    );
  }
}

export default Timer;
