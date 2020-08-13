import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headers">
        <h1>Lotto 6/49</h1>
        <h3>Generating lucky numbers</h3>
      </div>
      <div className="numbers">
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span className="special-num">1</span>
      </div>
      <div className="btns">
        <button className="btn reset-btn">Reset</button>
        <button className="btn numbers-btn">Show me lucky numbers</button>
      </div>
    </div>
  );
}

export default App;
