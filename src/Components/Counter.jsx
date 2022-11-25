import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
