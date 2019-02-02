import * as React from 'react';

const HookedCounter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>React Hookカウンター</h2>
      <p>count： {count}</p>
      <button onClick={increment}>＋</button>
    </div>
    
  )
}

export default HookedCounter;
