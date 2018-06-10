import React, { Component } from 'react';

class Notice extends Component {
  handleClick = () => { this.props.onClick(this.props.notice.id) }

  render() {
    return(
      <div className="tile">
        <h4 onClick={this.handleClick}>{this.props.notice.title}</h4>
        <p onClick={this.handleClick}>{this.props.notice.body}</p>
      </div>
    )
  }
}

export default Notice
