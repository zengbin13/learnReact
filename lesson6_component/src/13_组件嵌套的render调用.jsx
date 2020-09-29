import React, { PureComponent } from 'react';
import { memo } from 'react';

export default class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    console.log('Container组件被渲染');
    return (
      <div>
        <MemoHeader></MemoHeader>
        <Main></Main>
        <h2>{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Footer></Footer>
        <hr />
      </div>
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
const MemoHeader = memo(function Header() {
  console.log('Header组件被渲染');
  return <h3>Header组件</h3>;
});

function Footer() {
  console.log('Footer组件被渲染');
  return <h3>Footer组件</h3>;
}
class Main extends PureComponent {
  render() {
    console.log('Main组件被渲染');
    return (
      <div>
        <Banner></Banner>
        <ProductList></ProductList>
      </div>
    );
  }
}
class Banner extends PureComponent {
  render() {
    console.log('Banner组件被渲染');
    return <div>Banner组件</div>;
  }
}
class ProductList extends PureComponent {
  render() {
    console.log('ProductList组件被渲染');
    return <div>ProductList组件</div>;
  }
}
