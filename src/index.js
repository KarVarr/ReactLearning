let React = require("react");
let ReactDOM = require("react-dom");

const name = `Karen`;
const data = new Date().getFullYear();
ReactDOM.render(
  <>
    <h1>Created by {name}</h1>
    <h2>Copyright {data}</h2>
  </>,
  document.getElementById("root")
);
