import React, {Component} from 'react';
import MessageList from './MessageList.jsx'
import Chatbar from './ChatBar.jsx';
import UserCount from './UserCount.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
      ],
      userCount: 0
    }
    this.addMessage = this.addMessage.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    }
  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = (function ({data}) {
      console.log(data);
      data = JSON.parse(data);
      if (data.type === 'incomingMessage' || data.type === 'incomingNotification'){
        this.setState({messages: this.state.messages.concat(data)});
      } else if (data.type === 'incomingUserCount') {
        this.setState({userCount: data.count});
        console.log(this.state);
      }
    }).bind(this);
  } 

  addMessage(type, username, content) {
    this.socket.send(JSON.stringify({type, username, content}));
  }

  setCurrentUser(oldUser, newUser) {
    this.setState( {currentUser: {name:newUser} } )
    const notification = {
      type: 'postNotification', 
      content: `${oldUser} has changed their name to ${newUser}`};
    this.socket.send(JSON.stringify(notification));
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <UserCount userCount={this.state.userCount}/>
        </nav>
      <MessageList messages={this.state.messages} />
      <Chatbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} addMessage={this.addMessage} />
      </div>
    );
  }
}
export default App;
