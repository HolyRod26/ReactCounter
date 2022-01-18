import React from "react";

const Counter = (props) => {
  return (
    <div
      style={{
        fontFamily: "Chakra Petch",
        fontSize: "4rem",
        boxShadow: "3 3 6 1 rgba(162,255,23,0.6)",
      }}
    >
      <p>{props.countdown}</p>
    </div>
  );
};

export default Counter;
