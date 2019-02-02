import * as React from 'react';
import Counter from './components/Counter';


class App extends React.Component {
  public render() {
    return (
      <Counter initialCount={1}/>
    );
  }
}

export default App;
