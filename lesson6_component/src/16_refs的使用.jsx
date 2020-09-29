import React, { Component, createRef, PureComponent } from 'react';

export default class Parent extends Component {
  constructor() {
    super();
    this.react = createRef();
    this.angular = null;

    this.counter = createRef();
  }
  render() {
    return (
      <div>
        <h2 ref='vue'>hello javaScript</h2>
        <h2 ref={this.react}>hello javaScript</h2>
        <h2 ref={arg => (this.angular = arg)}>hello javaScript</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <Counter ref={this.counter}></Counter>
        <button onClick={e => this.handleCounter()}>counter组件+1</button>
        <hr />
      </div>
    );
  }
  changeText() {
    this.refs.vue.innerHTML = 'Hello Vue';
    this.react.current.innerHTML = 'Hello React';
    this.angular.innerHTML = 'Hello Angular';
  }
  handleCounter() {
    this.counter.current.increment();
  }
}

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
