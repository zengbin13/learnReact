import React, { Component } from 'react';

export default class Parent extends Component {
  constructor(props) {
    super();
    // 固定的数据
    // 需要更新的数据
    this.state = {
      message: '父组件的数据',
      titles: ['新款', '流行', '精选', '6折'],
      currentIndex: 0,
    };
  }
  render() {
    const { titles, currentIndex } = this.state;
    return (
      <div>
        <h2>父组件</h2>
        <TabContorl
          titles={titles}
          handleTabClick={index => this.handleTabClick(index)}
        ></TabContorl>
        <h2>{titles[currentIndex]}</h2>
        <hr />
      </div>
    );
  }
  handleTabClick(index) {
    this.setState({
      currentIndex: index,
    });
  }
}

class TabContorl extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className='tab-contorl'>
        {titles.map((item, index) => {
          return (
            <div
              key={index}
              className={'tab-item ' + (index === currentIndex ? 'active' : '')}
              onClick={e => this.handleTabClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
  handleTabClick(index) {
    // 改变tabcontorl的状态
    this.setState({
      currentIndex: index,
    });
    const { handleTabClick } = this.props;
    // 通知父组件修改内容
    handleTabClick(index);
  }
}
