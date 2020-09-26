import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Parent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: 'xiaoyu',
      age: 18,
    };
  }
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <h2>父组件</h2>
        <p>类组件的类型检查 {`static propsType | static defaultProps`}</p>
        <Child name={name} age={age}></Child>
        <Child></Child>
        <hr />
      </div>
    );
  }
}

class Child extends Component {
  static propsType = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  static defaultProps = {
    name: 'dahuang',
    age: 2,
  };
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>
          子组件：我的名字是{name},今年{age}岁
        </p>
      </div>
    );
  }
}
