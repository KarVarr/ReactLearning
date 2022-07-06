import React from "react";
import { add, divide, multiply, subrtact } from "../calculator";

const App = () => {
  return (
    <>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{subrtact(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </>
  );
};

export default App;
