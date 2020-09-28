import React, { Component } from 'react';

//1.创建context,并设置默认值
const UserContext = React.createContext({
  nickName: '昵称',
  level: 0,
});
//2.使用provider组件中的value属性将数据传递下去, 作为生产者
export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      nickName: '江一燕',
      level: 67,
    };
  }
  render() {
    return (
      <div>
        <h2>用户页面-函数</h2>
        <UserContext.Provider value={this.state}>
          <ProfileHeader></ProfileHeader>
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
// 3.在使用context数据的类组件中，定义静态属性contextType = 对应Context
// class UserInfo extends Component {
//   static contextType = UserContext;
//   render() {
//     return (
//       <div>
//         <p>用户信息</p>
//         <p>昵称:{this.context.nickName}</p>
//         <p>等级:{this.context.level}</p>
//       </div>
//     );
//   }
// }
function UserInfo() {
  return (
    <UserContext.Consumer>
      {value => (
        <div>
          <p>用户信息</p>
          <p>昵称:{value.nickName}</p>
          <p>等级:{value.level}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
}
