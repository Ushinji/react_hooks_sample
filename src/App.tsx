import * as React from 'react';
import Counter from './components/Counter';


class App extends React.Component {
  public render() {
    return (
      <div>
        <Counter initial={1}/>
      </div>
    );
  }
}

export default App;
