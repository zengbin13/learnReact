import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello react',
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.handleClick()}>异步:切换文本</button>
        <hr />
      </div>
    );
  }
  componentDidUpdate() {
    console.log('componentDidUpdate生命周期获取setState异步更新的结果:' + this.state.message);
  }
  handleClick() {
    this.setState(
      {
        message: '你好 小仙女',
      },
      () => {
        console.log('setState的回调函数获取异步更新的结果:' + this.state.message);
      }
    );
    //this.state异步更新
    //1.提示性能，防止页面频繁重新渲染
    //2.保证state和props的数据保存同步
    console.log(this.state.message);
  }
}
