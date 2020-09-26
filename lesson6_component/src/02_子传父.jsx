import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super();
    this.state = {
      message: '父组件的数据',
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>父组件:{this.state.counter}</h2>
        <Child handleClick={e => this.handleClick()} counter={counter}></Child>
        <hr />
      </div>
    );
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h2>子组件的按钮:</h2>
        <button onClick={this.props.handleClick}>+</button>
        <ul>
          <li>父组件将事件处理函数以props的形式传入子组件</li>
          <li>子组件通过this.props对象获取处理函数并绑定到对应位置</li>
        </ul>
      </div>
    );
  }
}
