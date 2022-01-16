import React from "react";

class BtnDecrease extends React.Component {
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
          -
        </button>
      </div>
    );
  }
}

export default BtnDecrease;
