import React, {Component} from 'react';

function Chatbar ({currentUser, addMessage, setCurrentUser}) {
  const name = () => {
    return currentUser.name ? currentUser.name : 'Anonymous'
  }
  function sendMessage (username) {
    const type = 'postMessage'
    return function event (e) {
      if(e.key === 'Enter') {
        addMessage(type, username, e.target.value);
        e.target.value = '';
      }
    }
  }

  function updateUser (e) {
    if(e.key === 'Enter') {
      e.target.value !== currentUser.name ? setCurrentUser(currentUser.name, e.target.value) : null;
    }
  }


    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={currentUser.name} onKeyPress={updateUser} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" name="message" onKeyPress={sendMessage(name())} placeholder="Type a message and hit ENTER" />
      </footer>
    )
}

export default Chatbar;