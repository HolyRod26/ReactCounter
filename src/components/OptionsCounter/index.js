import React from "react";
import BtnIncrease from "../BtnIncrease";
import BtnDecrease from "../BtnDecrease";

class OptionsCounter extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
        <BtnIncrease currentCountdown={this.props.currentCountdown} />
        <BtnDecrease />
      </div>
    );
  }
}

export default OptionsCounter;
