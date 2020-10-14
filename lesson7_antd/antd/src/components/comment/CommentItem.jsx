import React  from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default class CommentItem extends React.PureComponent {
  render() {
    const {info} = this.props
    return (
      <Comment
    author={<a href='/#'>{info.nickName}</a>}
        avatar={
          <Avatar
            src={info.avatar}
            alt="Han Solo"
          />
        }
        content={
          <p>
            {info.content}
          </p>
        }
        datetime={
          <Tooltip title={info.createTime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{info.createTime.fromNow()}</span>
          </Tooltip>
        }
        actions={
          [<span onClick={this.handleDelete.bind(this)}><DeleteOutlined />删除</span>]
        }
      />
    );
  }
  handleDelete() {
    this.props.deleteComment(this.props.index)
  }
}