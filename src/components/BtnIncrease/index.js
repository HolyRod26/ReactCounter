import React from "react";
import "./button.css";

// Utilizar props para cambiar el color de fondo de los botones

class BtnIncrease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState((state) => ({ counter: state.counter + 1 }));
    console.log(`counter updated to: ${this.state.counter}`);
  }

  render() {
    return (
      <div>
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
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

export default BtnIncrease;
