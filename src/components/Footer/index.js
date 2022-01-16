import React from "react";
import BtnDecrease from "../BtnDecrease";
import BtnIncrease from "../BtnIncrease";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
        <BtnIncrease />
        <BtnDecrease />
      </div>
    );
  }
}

export default Footer;
