import React from "react";
import StartBtn from "../StartBtn";
import BtnIncrease from "../BtnIncrease";
import BtnDecrease from "../BtnDecrease";

class OptionsCounter extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
        <BtnIncrease />
        <BtnDecrease />
        <StartBtn />
      </div>
    );
  }
}

export default OptionsCounter;
