import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounting: true,
    };
    this.handleStart = this.handleStart.bind(this);
  }

  // To start the countdown of the timer
  // Currently it only updates the description
  handleStart() {
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }));
  }

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
        onClick={this.handleStart}
      >
        {this.state.isCounting ? "Go" : "Stop"}
      </button>
    );
  }
}

export default Button;
