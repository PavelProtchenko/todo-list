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
      this.setState({notice: response.data})
    })
    .catch(error => console.log(error))
  } 
  render() {
    return(
      <div>
        Notices
      </div>
    )
  }
}

export default NoticeContainer
