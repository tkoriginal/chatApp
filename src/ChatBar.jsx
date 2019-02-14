import React, {Component} from 'react';

function Chatbar ({currentUser, addMessage, setCurrentUser}) {
  const name = () => {
    return currentUser.name ? currentUser.name : 'Anonymous'
  }
  function onKeyPress (username) {
    const type = 'postMessage'
    return function event (e) {
      if(e.key === 'Enter') {
        addMessage(type, username, e.target.value);
        e.target.value = '';
      }
    }
  }
  function setUser(e) {
    setCurrentUser(e.target.value);
  }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" value={currentUser.name} onChange={setUser}  placeholder="Your Name (Optional)" />
        <input className="chatbar-message" name="message" onKeyPress={onKeyPress(name())} placeholder="Type a message and hit ENTER" />
      </footer>
    )
}

export default Chatbar;