import * as React from "react";

interface IProps {
  initialCount: number;
}

interface IStates {
  count: number;
}

class Counter extends React.Component<IProps, IStates> {
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
    this.increment = this.increment.bind(this);
  }

  public increment() {
    const count = this.state.count;
    
    this.setState({ 
      count: count + 1,
    })
  }

  public render() {
    return (
      <div>
        <h2>カウンター</h2>
        <div>count： {this.state.count}</div>
        <button onClick={this.increment}>＋</button>
      </div>
    )
  }
}

export default Counter;
