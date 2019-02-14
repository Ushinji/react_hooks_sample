import * as React from "react";
import Counter from "./components/Counter";
import HookedCounter from "./components/HookedCounter";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Counter initial={1} />
        <HookedCounter initialCount={2} />
      </div>
    );
  }
}

export default App;
