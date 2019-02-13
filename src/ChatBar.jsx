import React, {Component} from 'react';
function Chatbar ({currentUser, addMessage}) {
  function onKeyPress (username) {
    return function event (e) {
      if(e.key === 'Enter') {
        addMessage(username, e.target.value);
        e.target.value = '';
      }
    }
  }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={currentUser.name} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" name="message" onKeyPress={onKeyPress(currentUser.name)} placeholder="Type a message and hit ENTER" />
      </footer>
    )
}

export default Chatbar;