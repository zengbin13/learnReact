import React, { Component } from 'react';

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      friends: [
        { id: 0, name: '花无缺', level: 36 },
        { id: 1, name: '小鱼儿', level: 34 },
        { id: 2, name: '小仙女', level: 27 },
      ],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.id}>
                姓名:{item.name}-水平:{item.level}
                <button onClick={e => this.incrementLevel(index)}>升级</button>
              </li>
            );
          })}
        </ul>
        <button onClick={e => this.insertData()}>添加新数据</button>
        <hr />
      </div>
    );
  }
  incrementLevel(index) {
    const newFriend = [...this.state.friends];
    newFriend[index].level += 1;

    this.setState({
      friends: newFriend,
    });
  }
  insertData() {
    // this.setState({
    //   friends: [...this.state.friends, { id: 3, name: '星月宫主', level: 64 }],
    // });
    const newFriend = [...this.state.friends];
    newFriend.push({ id: 3, name: '星月宫主', level: 64 });
    this.setState({
      friends: newFriend,
    });
  }
}
