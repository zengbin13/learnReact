import React, { Component } from 'react';
import './App.less';
import CommentInput from './components/comment/CommentInput';
import CommentItem from './components/comment/CommentItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  render() {
    const { commentList } = this.state;
    return (
      <div className='App'>
        {commentList.map((item, index) => {
          return (
            <CommentItem
              info={item}
              index={index}
              key={item.id}
              deleteComment={this.deleteComment.bind(this)}
            />
          );
        })}
        <CommentInput submitComment={this.submitComment.bind(this)} />
      </div>
    );
  }
  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info],
    });
  }
  deleteComment(index) {
    const newCommnetList = this.state.commentList;
    newCommnetList.splice(index, 1);
    this.setState({
      commentList: newCommnetList,
    });
  }
}

export default App;
