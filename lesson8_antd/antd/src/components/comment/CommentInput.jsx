import React, { PureComponent } from 'react'

import {Input, Button} from 'antd'
import moment from 'moment';
export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  render() {
    const {content} = this.state
    return (
      <>
       <Input.TextArea row={4}
                       value={content} 
                       onChange={this.handleChange.bind(this)}
                       style={{marginBottom: '20px'}}
       /> 
       <Button type='primary' onClick={this.addComment.bind(this)}>添加评论</Button>
      </>
    )
  }
  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  addComment() {
    const info = {
      id: moment().valueOf(),
      createTime: moment(),
      nickName: '小鱼',
      avatar: 'https://tva3.sinaimg.cn/large/9bd9b167gy1g1p9ps0ruxj20b40b40t8.jpg',
      content: this.state.content
    }
    this.props.submitComment(info)
    this.setState({
      content: ''
    })
  }
}
