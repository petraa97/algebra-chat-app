import "./App.css";
import Chat from "./Components/Chat";
import Data from "./Components/Data";
import { Component } from "react";
import { randChar } from "./User/randId";


class App extends Component {

  state = {
    messages: [],
    user: { username: randChar() },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone("98KaX2l7boJ5jf5q", {
      data: this.state.user,
    });

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const user = { ...this.state.user };
      user.id = this.drone.clientId;
      this.setState({ user });
    });

    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, user) => {
      const messages = this.state.messages;
      messages.push({ user, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="header" style={{backgroundImage: 'url(./header-image.jpg)', 
        backgroundSize:'cover'}}>
          
          <h1>Algebra Chat</h1>
            
        </div>
        <Chat
          messages={this.state.messages}
          currentUser={this.state.user}
        />
        <Data onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
