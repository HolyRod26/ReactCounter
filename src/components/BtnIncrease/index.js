import React from "react";
import "./button.css";

// Utilizar props para cambiar el color de fondo de los botones

class BtnIncrease extends React.Component {
  render() {
    return (
      <div>
        <button
          style={{
            padding: "1rem 3rem",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid #a2ff17",
            borderRadius: "1rem",
            fontWeight: 700,
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default BtnIncrease;
