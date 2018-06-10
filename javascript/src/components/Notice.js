import React from 'react';

const Notice = ({notice}) =>
  <div className="tile" key={notice.id}>
    <h4>{notice.title}</h4>
    <p>{notice.body}</p>
  </div>

export default Notice
