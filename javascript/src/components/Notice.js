import React, { Component } from 'react';

class Notice extends Component {
  handleClick = () => { this.props.onClick(this.props.notice.id) }

  handleDelete = () => { this.props.onDelete(this.props.notice.id) }

  render() {
    return(
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>x</span>
        <h4 onClick={this.handleClick}>{this.props.notice.title}</h4>
        <p onClick={this.handleClick}>{this.props.notice.body}</p>
      </div>
    )
  }
}

export default Notice
