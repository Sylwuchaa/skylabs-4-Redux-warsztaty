import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addComment } from '../actions/commentAction';

class AddComment extends Component {
 state = {
      comment: ''
    };
  onSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({
      comment: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="comment">
            Add a comment :
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={this.state.comment}
            onChange={this.onChange}
          />
          <button onClick={this.onClick}>
            Add
          </button>
        </form>
      </>
    );
  }
}
export default connect(
  null,
  { addComment }
)(AddComment);