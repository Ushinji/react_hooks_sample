import * as React from 'react';

interface Props {
  initial: number;
}

interface States {
  count: number;
}

class Counter extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.initial,
    };
    this.increment = this.increment.bind(this);
  }

  public increment() {
    const count = this.state.count;

    this.setState({
      count: count + 1,
    });
  }

  public render() {
    return (
      <div>
        <h2>カウンター</h2>
        <div>count： {this.state.count}</div>
        <button onClick={this.increment}>＋</button>
      </div>
    );
  }
}

export default Counter;
