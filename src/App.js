import React from "react";
import Headers from './components/Headers';
import Numbers from './components/Numbers';
import Buttons from './components/Buttons';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Headers />
      <Numbers />
      <Buttons />
    </div>
  );
}


