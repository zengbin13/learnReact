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
        <button onClick={e => this.handleClick()}>同步:切换文本1</button>
        <button className='btn'>同步:切换文本2</button>
        <hr />
      </div>
    );
  }
  componentDidMount() {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
      this.setState({
        message: '你好 小仙女2',
      });
      console.log(this.state.message);
    });
  }
  handleClick() {
    setTimeout(() => {
      this.setState({
        message: '你好 小仙女1',
      });
      console.log(this.state.message);
    }, 0);
  }
}
