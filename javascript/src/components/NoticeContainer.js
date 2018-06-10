import React, { Component } from 'react';
import axios from 'axios';

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
  render() {
    return(
      <div>
        {this.state.notices.map((notice) => {
          return(
            <div className="tile" key={notice.id}>
              <h4>{notice.title}</h4>
              <p>{notice.body}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default NoticeContainer
