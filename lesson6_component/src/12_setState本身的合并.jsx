import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={e => this.increment1()}>+1</button>
        <button onClick={e => this.increment2()}>+3</button>
        <hr />
      </div>
    );
  }
  increment1() {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  increment2() {
    this.setState((state, props) => {
      return { counter: state.counter + 1 };
    });
    this.setState((state, props) => {
      return { counter: state.counter + 1 };
    });
    this.setState((state, props) => {
      return { counter: state.counter + 1 };
    });
  }
}
