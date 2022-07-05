import React from "react";

function Heading() {
  const date = new Date().getHours();

  const color = {
    color: ""
  };

  let greering;

  if (date < 12) {
    greering = "Good morning";
    color.color = "red";
  } else if (date < 18) {
    greering = " Good adternoon";
    color.color = "green";
  } else {
    greering = "Good Evening";
    color.color = "blue";
  }

  return (
    <>
      <h1 className="heading" style={color}>
        {greering}
      </h1>
    </>
  );
}

export default Heading;
