import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgColor = this.props.bgColor;
    return (
      <button
        style={{
          padding: "1rem 2.5rem",
          margin: "1rem 0",
          fontSize: "1rem",
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "white",
          backgroundColor: bgColor,
          border: "1px solid #0F3AA8",
          borderRadius: "1rem",
          fontWeight: 700,
        }}
        onClick={() => this.props.onClick()}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
