import React, {Component} from 'react';
import MessageList from './MessageList.jsx'
import Chatbar from './ChatBar.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
      ]
    }
    this.addMessage = this.addMessage.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    }
  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = (function ({data}) {
      data = JSON.parse(data);
      switch(data.type) {
        case 'incomingMessage':
        this.setState({messages: this.state.messages.concat(data)});
          break;
        case 'incomingNotification':
          
          break;
        default:
        console.log('Message type missing from server');
        throw new Error('Unknown message type', data.type);
      }
      
    }).bind(this);
  } 

  addMessage(type, username, content) {
    this.socket.send(JSON.stringify({type, username, content}));
  }

  setCurrentUser(user) {
    this.setState( {currentUser: {name:user} } )
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
      <MessageList messages={this.state.messages} />
      <Chatbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} addMessage={this.addMessage} />
      </div>
    );
  }
}
export default App;
