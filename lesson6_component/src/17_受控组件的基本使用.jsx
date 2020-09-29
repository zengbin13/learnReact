import React, { Component } from 'react';

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='userName'>
            用户名:{' '}
            <input
              type='text'
              id='userName'
              onChange={e => this.handleChange(e)}
              value={this.state.userName}
            />
          </label>
          <input type='submit' value='提交' />
        </form>
        <hr />
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.userName);
  }
  handleChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }
}
