import React, { Component } from 'react';

//1.创建context,并设置默认值
const UserContext = React.createContext({
  nickName: '昵称',
  level: 0,
});
const ThemeContext = React.createContext({
  color: 'block',
});
//2.使用provider组件中的value属性将数据传递下去, 作为生产者
export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      nickName: '小鱼儿',
      level: 37,
    };
  }
  render() {
    return (
      <div>
        <h2>用户页面-多Context</h2>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: 'red' }}>
            <ProfileHeader />
          </ThemeContext.Provider>
        </UserContext.Provider>
        <hr />
      </div>
    );
  }
}
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h3>页面头部</h3>
        <UserInfo></UserInfo>
      </div>
    );
  }
}
function UserInfo() {
  return (
    <UserContext.Consumer>
      {value => (
        <div>
          <p>用户信息</p>
          <p>昵称:{value.nickName}</p>
          <p>等级:{value.level}</p>
          <ThemeContext.Consumer>
            {theme => <button>按钮:{theme.color}</button>}
          </ThemeContext.Consumer>
        </div>
      )}
    </UserContext.Consumer>
  );
}
