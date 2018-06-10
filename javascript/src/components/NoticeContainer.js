import React, { Component } from 'react';
import axios from 'axios';
import Notice from './Notice';
import update from 'immutability-helper';

class NoticeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    notices: []
    }
  } 
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/notice.json')
    .then(response => {
      console.log(response)
      this.setState({notices: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewNotice = () => {
    axios.post('http://localhost:3001/api/v1/notice', {notice: { title: '', body: '' }})
    .then(response => {
      console.log(response)
      const notices = update(this.state.notices, { $splice: [[0, 0, response.data]] })
      this.setState({notices: notices})
    })
    .catch(error => console.log(error)) 
  }

  render() {
    return(
      <div>
        <div>
          <button className="new-notice-btn" onClick={this.addNewNotice}>
            New notice
          </button>
        </div>
        {this.state.notices.map((notice) => {
          return(
            <Notice notice={notice} key={notice.id} />
          )
        })}
      </div>
    );
  }
}

export default NoticeContainer
