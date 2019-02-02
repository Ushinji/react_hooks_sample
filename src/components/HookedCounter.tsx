import * as React from 'react';

interface IProps {
  initialCount?: number;
  initialWord?: string;
}

const HookedCounter:React.FunctionComponent<IProps> = ({ initialCount = 0, initialWord = '!' }) => {
  const [count, setCount] = React.useState(initialCount);
  const [word, setWord] = React.useState(initialWord);

  const increment = React.useCallback(() => {
    setCount( prev => prev + 1)
  }, []);

  const handleWordClick = React.useCallback(() => {
    setWord( prev => `${prev}!`)
  }, []);

  return (
    <div>
      <h2>React Hookカウンター</h2>
      <p>count： {count}</p>
      <button onClick={increment}>＋</button>
      <p>word：{word}</p>
      <button onClick={handleWordClick}>！</button>
    </div>

  )
}

export default HookedCounter;
