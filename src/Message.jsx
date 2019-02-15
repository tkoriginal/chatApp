import React from 'react';

function Message ({message}) {
    return (
      <div>
        <div className="message">
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
        <div className="message system">
        </div>
      </div>
)}

export default Message;