import React from "react";
import Headers from './components/Headers';
import Numbers from './components/Numbers';
import Buttons from './components/Buttons';
import './App.css';





function App() {
  return (
    <div className="App">
      <Headers />
      <div className="numbers">
        <Numbers />
      </div>
      <div className="btns">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
