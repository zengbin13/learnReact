import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <Navbar>
          <span>左侧内容</span>
          <strong>中间内容</strong>
          <a href='/#'>右侧内容</a>
        </Navbar>
        <hr />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='nav-left nav-item'>{this.props.children[0]}</div>
        <div className='nav-center nav-item'>{this.props.children[1]}</div>
        <div className='nav-right nav-item'>{this.props.children[2]}</div>
      </div>
    );
  }
}
