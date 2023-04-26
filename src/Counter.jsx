import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count - 1);
  }

  return (
    <>
      <div className="heading">Counter App</div>

      <div className="card">
        <button className="inc" onClick={increment}>
          +
        </button>
        <button
          className="reset"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
        <button className="dec" onClick={decrement} disabled={count === 0}>
          -
        </button>
        <div className="counter">{count}</div>
      </div>
    </>
  );
}

export default Counter;
