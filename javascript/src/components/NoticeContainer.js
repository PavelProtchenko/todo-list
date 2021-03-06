import React, { Component } from 'react';
import axios from 'axios';
import Notice from './Notice';
import NoticeForm from './NoticeForm';
import update from 'immutability-helper';

class NoticeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    notices: [],
    editingNoticeId: null,
    notification: ''
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
      this.setState({notices: notices, editingNoticeId: response.data.id})
    })
    .catch(error => console.log(error)) 
  }

  updateNotice = (notice) => {
    const noticeIndex = this.state.notices.findIndex(x => x.id === notice.id)
    const notices = update(this.state.notices, {[noticeIndex]: { $set: notice }})
    this.setState({notices: notices, notification: 'All changes are saved'})
  }

  deleteNotice = (id) => {
    axios.delete(`http://localhost:3001/api/v1/notice/${id}`)
    .then(response => {
      console.log(response)
      const noticeIndex = this.state.notices.findIndex(x => x.id === id)
      const notices = update(this.state.notices, { $splice: [[noticeIndex, 1]] })
      this.setState({notices: notices})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: ''})}

  enableEditing = (id) => {
    this.setState({editingNoticeId: id}, () => { this.title.focus() })
  }

  render() {
    return(
      <div>
        <div>
          <button className="new-notice-btn" onClick={this.addNewNotice}>
            New notice
          </button>
          <span className="notification">
            {this.state.notification}
          </span>
        </div>
        {this.state.notices.map((notice) => {
          if(this.state.editingNoticeId === notice.id) {
            return(<NoticeForm notice={notice} key={notice.id} updateNotice={this.updateNotice}
                    titleRef= {input => this.title = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return(<Notice notice={notice} key={notice.id} onClick={this.enableEditing}
                    onDelete={this.deleteNotice} />)
          }
        })}
      </div>
    );
  }
}

export default NoticeContainer
