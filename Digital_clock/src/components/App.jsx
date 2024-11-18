import React, { useState } from "react";

function App() {
  setInterval(exactTime, 1000);

  let time = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(time);

  function exactTime() {
    setTimer(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={exactTime}>Get Time</button>
    </div>
  );
}

export default App;
