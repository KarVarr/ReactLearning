import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

const name = `Karen`;
const data = new Date().getFullYear();
ReactDOM.render(
  <>
    <h1 className="heading">Created by {name}</h1>
    <h2 spellCheck="false">Copyright {data}</h2>

    <div className="divImg">
      <img
        alt="food"
        src="https://www.myfoodtrip.com/wp-content/uploads/2020/05/Food-Blog-Directory.jpg"
      />
      <img
        alt="food"
        src="https://media.self.com/photos/622912847b959736301bfb91/2:1/w_2119,h_1059,c_limit/GettyImages-1301412050.jpg"
      />
      <img
        alt="food"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=768,574"
      />
    </div>
  </>,
  document.getElementById("root")
);
