import React from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';
class MessageList extends React.Component {
  render(){
    return (
    <main className="messages">

    {this.props.messages.map((message, index) => {
      if (message.type === 'incomingMessage'){
        return <Message key={index} message={message}/>
      } else if (message.type === 'incomingNotification'){
        return <Notification key={index} message={message} />
      }
      })}
   </main>
    )
  }
}

export default MessageList;
