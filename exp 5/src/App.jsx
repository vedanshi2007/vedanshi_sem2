import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <div className="counter-card">
        <h2>React Counter<br/>Application</h2>
        <div className="counter-display">
          {count}
        </div>
        <div className="button-group">
          <button onClick={increment} className="btn">Increment (+)</button>
          <button onClick={decrement} className="btn">Decrement (-)</button>
        </div>
        <button onClick={reset} className="btn reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
