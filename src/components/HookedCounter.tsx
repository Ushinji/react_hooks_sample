import * as React from 'react';

interface IProps {
  initial?: number;
}

const HookedCounter:React.FunctionComponent<IProps> = ({initial = 0}) => {
  const [count, setCount] = React.useState(initial);

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
