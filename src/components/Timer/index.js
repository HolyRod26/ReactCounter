import React from "react";
import GeneralBtn from "../GeneralBtn";
// import BtnDecrease from "../BtnDecrease";
// import BtnIncrease from "../BtnIncrease";

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
        }}
      >
        <p>{countdown}</p>
        <GeneralBtn content="Iniciar" />
      </div>
    );
  }
}

export default Timer;
