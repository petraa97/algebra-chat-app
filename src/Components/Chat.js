import { Component } from "react";
import React from "react";

class Chat extends Component {
  render() {
    const messages = this.props.messages;
    return (
      <ul className="list">
        {messages.map((message) => this.renderMessage(message))}
      </ul>
    );
  }

  renderMessage(message) {
    const user = message.user;
    const text = message.text;
    const currentUser = this.props.currentUser;
    let attributes = "";

    if (user.id === currentUser.id) {
      attributes = "message user";
    } else {
      attributes = "message";
    }

    return (
      <li className={attributes}>
        <span
          className="avatar"
          style={{
            backgroundImage: `url(img/${user.clientData.username
              .toLowerCase()
              .replace(" ", "")}.png)`,
            backgroundSize: "cover",
          }}
        />
        <div className="content">
          <div className="username">{user.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Chat;
