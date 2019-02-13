import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
        <div className="message system">
        </div>
      </div>
      
    )}
  }

export default Message;