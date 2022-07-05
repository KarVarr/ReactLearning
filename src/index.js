import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

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

ReactDOM.render(
  <>
    <h1 className="heading" style={color}>
      {greering}
    </h1>
  </>,
  document.getElementById("root")
);

// {
//   date > 0 && date < 12 ? 'Good mornig' : date > 12 && date < 18 ? 'Good afternoon' : date > 18 && date < 23 ? 'Good eveninng' : ''
// }
// let studentGrade = studentScore >= 70 ? "A"
//     : studentScore >= 60 ? "B"
//     : studentScore >= 50 ? "C"
//     : studentScore >= 45 ? "D"
//     : "E";
