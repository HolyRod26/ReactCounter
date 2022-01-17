import React from "react";

class StartBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "start",
    };
  }
  //handleStart() {
  //  this.setState((state, props));
  //}

  render() {
    return (
      <button
        style={{
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "white",
          backgroundColor: "transparent",
          border: "1px solid #0F3AA8",
          borderRadius: "1rem",
          fontWeight: 700,
        }}
      >
        {this.state.message}
      </button>
    );
  }
}

export default StartBtn;
