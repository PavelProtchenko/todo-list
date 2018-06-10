import React, { Component } from 'react';

class NoticeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="tile">
        <form>
          <input className="input" type="text" name="title" placeholder="Enter a title" />
          <textarea className="input" name="body" placeholder="Enter your text"></textarea>
        </form>
      </div>
    );
  }
}

export default NoticeForm
