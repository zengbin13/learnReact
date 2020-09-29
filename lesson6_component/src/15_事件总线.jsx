import React, { Component } from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();
export default class Parent extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
        <hr />
      </div>
    );
  }
}
class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'home组件的message',
    };
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>Home组件:{this.state.message}</p>
      </div>
    );
  }
  componentDidMount() {
    // 监听事件
    eventBus.addListener('home', (...args) => {
      console.log(args);
      this.setState({
        message: args[0],
      });
    });
  }
  componentWillUnmount() {
    //移除事件
    eventBus.removeListener('home');
  }
}
class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={e => this.eventEmit()}>修改home组件的数据</button>
      </div>
    );
  }
  eventEmit() {
    // 触发事件
    eventBus.emit('home', '来自profile组件的数据', 2);
  }
}
