import React from 'react';

function Message ({message}) {
  function imagePresent(text) {
    return !!(text.match(/[gif|jpg|jpeg|png]$/));
  }
    return (
        <div className="message">
          <span className="message-username">{message.username}</span>
            {imagePresent(message.content) ?
            (<span className="message-content"><img src={message.content} alt="message image"/></span>) :
             <span className="message-content">{message.content}</span>}
       </div>  
)}

export default Message;