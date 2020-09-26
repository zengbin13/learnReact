import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super();
    this.state = {
      message: '我是父组件的数据',
    };
  }
  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        <Child message={this.state.message}></Child>
        <hr />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h2>我是子组件</h2>
        <p>{this.props.message}</p>
        <ul>
          <li>父组件通过在子组件添加属性传递</li>
          <li>子组件通过this.props对象中获取</li>
        </ul>
      </div>
    );
  }
}
