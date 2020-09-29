import React from 'react';
import './App.css';

import Com1 from './01_父传子';
import Com2 from './02_子传父';
import Com3 from './03_类型验证与默认值';
import Com4 from './04_阶段案例tabcontorl';
import Com5 from './05_React实现Slot1';
import Com6 from './06_React实现Slot2';
import Com7 from './07_跨组件通信-context-class';
import Com8 from './08_跨组件通信-context-函数';
import Com9 from './09_跨组件通信-context-多content';
import Com10 from './10_setState异步更新';
import Com11 from './11_setState同步更新';
import Com12 from './12_setState本身的合并';
import Com13 from './13_组件嵌套的render调用';
import Com14 from './14_state的不可变性';
import Com15 from './15_事件总线';
import Com16 from './16_refs的使用';
import Com17 from './17_受控组件的基本使用';

function App() {
  return (
    <div className='App'>
      <Com1 />
      <Com2 />
      <Com3 />
      <Com4 />
      <Com5 />
      <Com6 />
      <Com7 />
      <Com8 />
      <Com9 />
      <Com10 />
      <Com11 />
      <Com12 />
      <Com13 />
      <Com14 />
      <Com15 />
      <Com16 />
      <Com17 />
    </div>
  );
}

export default App;
