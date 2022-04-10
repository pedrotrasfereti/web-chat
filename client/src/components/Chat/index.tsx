import React from "react";

import { IChatSessionPropTypes } from "../../interfaces";

function Chat({ name, room }: IChatSessionPropTypes) {
  return (
    <div>
      <h1>Chat</h1>
      <p>Name: {name}</p>
      <p>Room ID: {room}</p>
    </div>
  );
}

export default Chat;
