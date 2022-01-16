import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div
        className="navbar"
        style={{
          display: "flex",
          margin: "1rem 0",
        }}
      >
        <h1 style={{ fontFamily: "Chakra Petch", marginLeft: "2rem" }}>
          Contador en React
        </h1>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            margin: "0 2rem 0 auto",
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid #FFA901",
            borderRadius: "1rem",
            fontWeight: 700,
          }}
        >
          Restart
        </button>
      </div>
    );
  }
}

export default Nav;
