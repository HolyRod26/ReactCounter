import React from "react";
import Button from "../Button";

class Nav extends React.Component {
  render() {
    return (
      <div
        className="navbar"
        style={{
          display: "flex",
          margin: "1rem 0",
          justifyContent: "space-around",
        }}
      >
        <h1 style={{ fontFamily: "Chakra Petch", marginLeft: "2rem" }}>
          Contador en React
        </h1>
        <Button label="Log out" bgColor="transparent" />
      </div>
    );
  }
}

export default Nav;
