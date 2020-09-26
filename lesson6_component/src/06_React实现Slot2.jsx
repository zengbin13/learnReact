import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <Navbar
          leftSlot={<span>左侧内容</span>}
          centerSlot={<strong>中间内容</strong>}
          rightSlot={<a href='/#'>右侧内容</a>}
        ></Navbar>
        <hr />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    const { leftSlot, rightSlot, centerSlot } = this.props;
    return (
      <div className='navbar'>
        <div className='nav-left nav-item'>{leftSlot}</div>
        <div className='nav-center nav-item'>{centerSlot}</div>
        <div className='nav-right nav-item'>{rightSlot}</div>
      </div>
    );
  }
}
