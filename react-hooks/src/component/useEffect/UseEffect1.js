import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    if (count >= 1) document.title = `Count: ${count}`;
    if (count < 0) document.title = `Negative: ${count}`;
    else document.title = `Hello`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        Increment Me
      </button>
      <button className="btn" onClick={decrement}>
        Decrement Me
      </button>
    </div>
  );
};

export default UseEffect1;
