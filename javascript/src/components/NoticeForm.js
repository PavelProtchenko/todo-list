import React, { Component } from 'react';
import axios from 'axios';

class NoticeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.notice.title,
      body: this.props.notice.body
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const notice = {title: this.state.title, body: this.state.body}
    axios.put(
      `http://localhost:3001/api/v1/notice/${this.props.notice.id}`,
      {notice: notice}
    )
    .then(response => {
      console.log(response)
      this.props.updateNotice(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input className="input" type="text" name="title" placeholder="Enter a title"
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef} />
          <textarea className="input" name="body" placeholder="Enter your text"
            value={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    );
  }
}

export default NoticeForm
